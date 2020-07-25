package com.example.umeed;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        viewSetter();

    }
    int i = 0;
    void viewSetter(){

        final Button button = findViewById(R.id.buttonNext);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                button.setText("Clicked me "+i);
                i++;
                Toast.makeText(MainActivity.this, "Clicked me" , Toast.LENGTH_SHORT).show();
                startActivity(new Intent(MainActivity.this,RedirectLogin.class));
            }
        });


    }
}