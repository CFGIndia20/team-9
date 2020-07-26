package com.example.umeed.Activities;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.example.umeed.R;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.HashMap;

public class TaskReviewBoard extends AppCompatActivity {

    RecyclerView recyclerView;
    String managerId = "manager";
    ArrayList<DocumentSnapshot> data = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_task_review_board);
        recyclerView = findViewById(R.id.recyclerView);
        getAllUpdate();

    }

    void getAllUpdate(){
        FirebaseFirestore.getInstance().collection("work").whereEqualTo("manager",managerId).get().addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
            @Override
            public void onSuccess(QuerySnapshot querySnapshot) {

                for (DocumentSnapshot document : querySnapshot.getDocuments()) {
                    if (document.contains("updatesText") || document.contains("updatesImg")) {
                        data.addAll(querySnapshot.getDocuments());
                    }
                }
                    recyclerView.setAdapter(new AdapterViewTask(TaskReviewBoard.this,data));
                    recyclerView.setLayoutManager(new LinearLayoutManager(TaskReviewBoard.this));
            }
        });
    }


    class AdapterViewTask extends RecyclerView.Adapter<ViewTask>{

        Context c;
        ArrayList<DocumentSnapshot> data;

        public AdapterViewTask(Context c, ArrayList<DocumentSnapshot> data) {
            this.c = c;
            this.data = data;
        }

        @NonNull
        @Override
        public ViewTask onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            return new ViewTask(LayoutInflater.from(c).inflate(R.layout.adapter_tak_review,parent,false));
        }

        @Override
        public void onBindViewHolder(@NonNull ViewTask holder, int position) {
            if(!data.get(position).contains("updatesImg")){
                holder.imageView.setVisibility(View.GONE);
            }else{
                try {

                    Glide.with(c).load(data.get(position).getString("updatesImg")).into(holder.imageView);
                }catch (Exception e){
//                    view is recycled
                }
            }
            if(data.get(position).contains("updatesText")){
                holder.desc.setText(data.get(position).getString("updatesText"));
            }else {
                holder.desc.setVisibility(View.GONE);
            }
        }

        @Override
        public int getItemCount() {
            return data.size();
        }
    }

    class ViewTask extends RecyclerView.ViewHolder{

        TextView desc;
        ImageView imageView;

        public ViewTask(@NonNull View itemView) {
            super(itemView);
            desc = itemView.findViewById(R.id.descReview);
            imageView = itemView.findViewById(R.id.imageReview);
        }
    }



}