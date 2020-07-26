package com.example.umeed;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.Toast;

import com.example.umeed.Activities.ManagerOptions;
import com.example.umeed.Activities.MarkAttendance;
import com.firebase.ui.auth.AuthUI;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        if(FirebaseAuth.getInstance().getCurrentUser()==null){
            login();
        }else{
            startActivity(new Intent(MainActivity.this,ManagerOptions.class));
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode==47){
            if(FirebaseAuth.getInstance().getCurrentUser()==null){
                login();
            }else{
                getUserType();
            }
        }
    }
    void getUserType(){
        FirebaseFirestore.getInstance().collection("users")
                .document(FirebaseAuth.getInstance().getCurrentUser().getUid())
                .get().addOnSuccessListener(new OnSuccessListener<DocumentSnapshot>() {
            @Override
            public void onSuccess(DocumentSnapshot documentSnapshot) {
                     if(documentSnapshot.contains("role")){
                         String role = documentSnapshot.getString("role");
                         if(role.equals("base_user")){
                             startActivity(new Intent(MainActivity.this,RedirectLogin.class));
                         }else{
                             startActivity(new Intent(MainActivity.this,ManagerOptions.class));
                         }
                     }else{
                         startActivity(new Intent(MainActivity.this,RedirectLogin.class));
                     }
            }
        });

    }

    void login(){
        // Choose authentication providers
        List<AuthUI.IdpConfig> providers = Arrays.asList(
                new AuthUI.IdpConfig.EmailBuilder().build());
        startActivityForResult(
                AuthUI.getInstance()
                        .createSignInIntentBuilder()
                        .setAvailableProviders(providers)
                        .build(),
                47);
    }

}