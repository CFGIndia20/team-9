package com.example.umeed.Activities;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.example.umeed.R;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;

public class AssignedTasks extends AppCompatActivity {

    ArrayList<String> tasks = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_assigned_tasks);
        FirebaseFirestore.getInstance().collection("users")
                .document(FirebaseAuth.getInstance().getCurrentUser().getUid()).get()
                .addOnSuccessListener(new OnSuccessListener<DocumentSnapshot>() {
                    @Override
                    public void onSuccess(DocumentSnapshot documentSnapshot) {
                        if(documentSnapshot.contains("tasks")){
                            ArrayList<String> arrayList = (ArrayList<String>) documentSnapshot.get("tasks");
                            for (String s : arrayList) {
                                FirebaseFirestore.getInstance().collection("work").document(s).get()
                                        .addOnSuccessListener(new OnSuccessListener<DocumentSnapshot>() {
                                            @Override
                                            public void onSuccess(DocumentSnapshot documentSnapshot) {
                                                tasks.add(documentSnapshot.getString("desc"));
                                                setAdapter();
                                            }
                                        });
                            }
                        }

                    }
                });


    }

    void setAdapter(){
        ArrayAdapter<String> adapter = new ArrayAdapter(AssignedTasks.this,R.layout.support_simple_spinner_dropdown_item);
        ListView listView = findViewById(R.id.listView);
        listView.setAdapter(adapter);
    }
}