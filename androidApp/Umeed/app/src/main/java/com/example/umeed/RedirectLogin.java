package com.example.umeed;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;

import com.firebase.ui.auth.AuthUI;
import com.google.firebase.auth.FirebaseAuth;

import java.util.Arrays;
import java.util.List;

public class RedirectLogin extends AppCompatActivity {

    String baseUrl = "https://cfg2020-dca44.firebaseapp.com/";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_redirect_login);
        displayReact();
    }



    void displayReact(){
        WebView webView = findViewById(R.id.webView);
        webView.clearCache(true);
        webView.clearHistory();
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        String uid = FirebaseAuth.getInstance().getCurrentUser().getUid();

        Uri uri = Uri.parse(baseUrl);
        uri = uri.buildUpon().appendQueryParameter("android",uid).build();
        Log.d("final uri ",uri.toString());
        webView.loadUrl(uri.toString());

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode==47){
            if(FirebaseAuth.getInstance().getCurrentUser()==null){
                login();
            }else{
                displayReact();
            }
        }
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