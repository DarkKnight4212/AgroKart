// const firebase=require('firebase');

// const firebaseConfig = {
//     apiKey: "AIzaSyCeQ_f3zOpkptFTCmXXgt2ve4-efXGZkYA",
//     authDomain: "gfg-hackathon-42b93.firebaseapp.com",
//     projectId: "gfg-hackathon-42b93",
//     storageBucket: "gfg-hackathon-42b93.appspot.com",
//     messagingSenderId: "133107254504",
//     appId: "1:133107254504:web:3a8ec32076471da619b55d",
//     measurementId: "G-N6HNY7FCM9"
//   };

//   firebase.intializeApp(firebaseConfig);
//   const db=firebase.firestore();
//   module.exports=db;

// import * as firebaseAdmin from 'firebase-admin';
//  var firebaseAdmin = require('firebase-admin');
require('dotenv').config();

var admin = require("firebase-admin");

// var serviceAccount = require("./sevice-key.json.env");

admin.initializeApp({
  credential: admin.credential.cert(
    {
      "type": process.env.TYPE,
      "project_id": "gfg-hackathon-42b93",
      "private_key_id": process.env.PRIVATE_KEY_ID,
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6Bj/6kYfNx5Xv\nWyDsQxexoMfhmMvrF6variqx4lJ61DZFhmOOqzYkJdB+7s/FuBb++vVUIe1lapQU\nu/eT/7VuCWld3L1UmNk+grb33nDdIMTNvXnzNxnrj7mN4yKaoF69q3gv1kdFA8ba\nj/tb9DRYOXCG+HyW+APQPLGBl7p3IJ2fP8a47uN850NvyI0OyXvpKLQnZ+zvX+8i\nj2CEBBPJttyGXXqQyHVqiz5iq1lqBC+t3imJg1tEyNRYzG21lMvktiBpJQq/b7iS\nxL1yVk7hML7HBe71v7/h/0L+/isvAJC9pYok5e3CsRP7i0l1Wjdpj5UFo3h1cnhG\n4KLHcueNAgMBAAECggEAAKRtsmuG1bX1oh1PHXV5pezUjO99MuHZ+shXY7GfukT3\njmmHJ6Iml9Ei8P87jPC8daoiA8e44CeL17dTBlFc1QT8waRx7lDPKTFjzjELWsre\n4FKvhG3/LT95I6QXwiLrWLm2zZiEov9Epl3/vbONKABIsmdMRrsYH+GoIxi++3hC\n//tI30ExVwLZMPva+PVO6wQrBVSS5N1EIwrfkl0/sjAPou9jtfUXDCzk+upL/s6D\nstVK1+BYAD+lJE1nCFDMU5dPvzYPgHDegZIUW/hPhh8AM3u2nvQCbLJvE+0BGTd3\nFzxIlm64Z4vWoirWuh0CBF/Mv0FbtUBHuaaRgYz+HQKBgQDjGbhZvx2ld1NuO6J4\n2u86kU1rKVdTUlvLLqdRy2tNKhVG1Gri852rNTyqIdszq45t7WC4dHCY3+a/e4bg\nNL2fpYGPLeULif3UArDIbj227zGqh9JkbXYxE/KYzPhqninAGQTBGfrkCthc7zl5\nSEftiBW3LgsANiEZ4Gw4i+UX6wKBgQDRsmPdIn/h9WLjGFf2XtxAuX/0iwt4xS96\nfe4fZOoUO5hs//AElSbqWmmx0CK8w1gl4PIKZu5xxvRQSIXI9U6P4TLGN6B77MY6\nsC6LsPJ93pNLe7SBd841GydGcQ9jzH8lWyEsiwmg38Ev2wpsCA09GgowemMEkXTx\nAW9ZaEjYZwKBgFL4qqnfcW1q00iK8SlGk/DJ9YcZa5Y9mNv7B5aSw3lFztA5+3M/\nnnNW1/sws22FWFxBRf0eTaUM6Lk84GI54q3ZQiSVmAFHQT2cXgpcfJ/BdFvhk7St\naWk06IV7HaeWcZqFiX8jhs6aR8JshIsTJXRbK9PpNou1OxLBM8jVE7ZRAoGBAMZ0\nBGy4hLyM5fw0ArNITTv4Em+V09KFEwzi9yPA9oMVb4jgov9DROQPku3UI7vvR5H5\nlDdh+JG3D2qXZ/2qoqIqJ0pORNRjXasXJ8XOPX//z/hk54yLnJzHyOCyiTUSyNXK\nq9ei8gbNG+C1dOSOrjDAXxpICUO+gSTBDedYeXBLAoGAP8VeraMGF2A7tSCyo9+L\nRY+wYglYo2uHtji7PyN/iv36VYKoSndgBVFUV2gqkwusEBEawVbxqYAiSCFZxMNS\nJJxEuEvuUtik3CA/BkHHGXFPLeG+FAumSc4bvVFy8ZxzbbDLE+/sC81iKrLOa64Z\nI/GafSbZ6M+jM8PWLN/qD68=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-k20qh@gfg-hackathon-42b93.iam.gserviceaccount.com",
      "client_id": process.env.CLIENT_ID,
      "auth_uri": process.env.AUTH_URI,
      "token_uri": process.env.TOKEN_URI,
      "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_x509_CERT_URL,
      "client_x509_cert_url": process.env.CLIENT_x509_CERT_URL,
    }),
});

const db = admin.firestore();
module.exports = db;
