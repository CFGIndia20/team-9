package com.example.umeed.Activities;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.example.umeed.R;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.DocumentChange;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import org.json.JSONArray;

import java.util.ArrayList;
import java.util.HashMap;

public class MarkAttendance extends AppCompatActivity {

    String managerId = "manager";

    HashMap<String,String> nameUidMap = new HashMap();
    ArrayList<CheckBox> checkBoxes = new ArrayList<>();

    LinearLayout layout;

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mark_attendance);
        layout = findViewById(R.id.rootRecycler);
        getAllUsers();
        findViewById(R.id.markAttendance).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ArrayList<String> array = new ArrayList<>();
                for (CheckBox checkBox : checkBoxes) {
                    if(checkBox.isChecked())
                        array.add(checkBox.getTag().toString());
                }
                HashMap<String,Object> updates = new HashMap();
                int compensation = 0;
                try {
                    compensation = Integer.parseInt(((EditText)findViewById(R.id.compensationAmt)).getText().toString());
                }catch (Exception e){
                    return;
                }
                updates.put("compensation",compensation);
                updates.put("availUser",array);
                FirebaseFirestore.getInstance().collection("attendance").add(updates).addOnSuccessListener(new OnSuccessListener<DocumentReference>() {
                    @Override
                    public void onSuccess(DocumentReference documentReference) {
                        Toast.makeText(MarkAttendance.this, "Marked Attendance", Toast.LENGTH_SHORT).show();
                        finish();
                    }
                });
            }
        });
    }


    void getAllUsers(){
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
        for (String s : nameUidMap.keySet()) {
            CheckBox c = new CheckBox(this);
            c.setText(s);
            c.setTag(nameUidMap.get(s));
            checkBoxes.add(c);
            layout.addView(c,1);
        }



    }

}