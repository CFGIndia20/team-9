package com.example.umeed.Activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.umeed.R;
import com.example.umeed.RedirectLogin;

public class ManagerOptions extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_manager_options);
        Button markAttendance = findViewById(R.id.markAttendance);
        markAttendance.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ManagerOptions.this.startActivity(new Intent(ManagerOptions.this, MarkAttendance.class));
            }
        });

        Button distributeTask = findViewById(R.id.distributeTasks);
        distributeTask.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ManagerOptions.this.startActivity(new Intent(ManagerOptions.this, DistributeTask.class));
            }
        });

        Button dashboard = findViewById(R.id.dashBoard);
        dashboard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ManagerOptions.this.startActivity(new Intent(ManagerOptions.this, TaskReviewBoard.class));
            }
        });
    }

    public void redirect(View view) {
        startActivity(new Intent(ManagerOptions.this, RedirectLogin.class));
    }


}