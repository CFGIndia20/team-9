package com.example.umeed.Activities;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.ProgressDialog;
import android.content.Context;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.umeed.R;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class DistributeTask extends AppCompatActivity {

    ProgressDialog dialog;

    HashMap<String,String> nameUidMap = new HashMap();
    ArrayList<CheckBox> checkBoxes = new ArrayList<>();

    LinearLayout layout;

    String managerId = "manager";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_distribute_task);
        layout = findViewById(R.id.rootRecyclerLinear);
        dialog = new ProgressDialog(this);
        dialog.setTitle("Please wait");
        getAllUsers();
        findViewById(R.id.assignTasks).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                EditText desc = findViewById(R.id.descOfReq);
                EditText amt = findViewById(R.id.hrReq);
                HashMap<String,Object> updates = new HashMap<>();
                updates.put("desc",desc.getText().toString());
                updates.put("name",desc.getText().toString());
                updates.put("hrs",Integer.parseInt(amt.getText().toString()));
                updates.put("manager",FirebaseAuth.getInstance().getCurrentUser().getUid());
                for (CheckBox checkBox : checkBoxes) {
                    if(checkBox.isChecked()){
                        updates.put("userId", checkBox.getTag().toString());
                        FirebaseFirestore.getInstance().collection("work").add(updates);
                    }
                }
                Toast.makeText(DistributeTask.this, "Assigned task", Toast.LENGTH_SHORT).show();
                finish();
            }
        });
    }

    void showProgress(){
        dialog.setCancelable(false);
        dialog.show();
    }

    void stopProgress(){
        dialog.cancel();
    }

    void getAllUsers(){
        showProgress();
        nameUidMap.clear();
        FirebaseFirestore.getInstance().collection("users").whereEqualTo("manager",managerId).get().addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
            @Override
            public void onSuccess(QuerySnapshot querySnapshot) {
                for (DocumentSnapshot documentChange : querySnapshot.getDocuments()) {
                    nameUidMap.put(documentChange.getString("name"),documentChange.getId());
                }
                setRecycler();
            }
        });
    }

    void setRecycler(){
        stopProgress();
        for (String s : nameUidMap.keySet()) {
            CheckBox c = new CheckBox(this);
            c.setText(s);
            c.setTag(nameUidMap.get(s));
            checkBoxes.add(c);
            layout.addView(c,2);
        }
    }

}