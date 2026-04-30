// রক্তদাতা খোঁজার ফাংশন
function searchDonor() {
    const group = document.getElementById('searchBloodGroup').value;

    if (group) {
        // এখানে আপনি ভবিষ্যতে ডাটাবেজ থেকে তথ্য আনার কোড লিখবেন
        alert(group + " গ্রুপের রক্তদাতার তথ্য খুঁজছি...");
    } else {
        alert("অনুগ্রহ করে রক্তের গ্রুপ নির্বাচন করুন!");
    }
}

// ভবিষ্যতে আরও কোনো ইন্টারঅ্যাক্টিভিটি যোগ করতে চাইলে এখানে করুন
console.log("রক্তসৈনিক বাংলাদেশ ফাউন্ডেশন অ্যাপ লোড হয়েছে।");

// admin
// লগইন ফর্ম হ্যান্ডলার
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    // সাধারণ ভ্যালিডেশন চেক
    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "Login Successful! Redirecting...";
        
        // সফল লগইনের পর ড্যাশবোর্ডে পাঠানোর জন্য:
        // window.location.href = "dashboard.html"; 
    } else {
        msg.style.color = "red";
        msg.textContent = "Invalid username or password!";
    }
});

// পাসওয়ার্ড ভুলে গেলে রিসেট করার ফাংশন
function forgotPassword() {
    const email = prompt("আপনার রেজিস্টার্ড ইমেইলটি লিখুন:");
    
    if (email) {
        // মনে রাখবেন: Firebase ব্যবহার করতে হলে HTML-এ Firebase SDK এবং কনফিগ ফাইল লিঙ্ক করতে হবে।
        if (typeof firebase !== "undefined") {
            firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                    alert("পাসওয়ার্ড রিসেট করার লিঙ্ক আপনার ইমেইলে পাঠানো হয়েছে। আপনার ইনবক্স চেক করুন।");
                })
                .catch((error) => {
                    alert("ত্রুটি: " + error.message);
                });
        } else {
            alert("Firebase কানেক্ট করা নেই। দয়া করে ডেভেলপার সেটিংস চেক করুন।");
        }
    }
}

// user
// লগইন ফর্ম সাবমিট হ্যান্ডলার
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    // ইউজার লগইন কন্ডিশন
    if (user === "user" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "Login Successful! Redirecting...";
        
        // সফল লগইনের পর ইউজার ড্যাশবোর্ডে পাঠানোর কোড:
        // window.location.href = "user-dashboard.html"; 
    } else {
        msg.style.color = "red";
        msg.textContent = "Invalid username or password!";
    }
});

// পাসওয়ার্ড রিসেট করার ফাংশন (Firebase এর জন্য)
function forgotPassword() {
    const email = prompt("আপনার রেজিস্টার্ড ইমেইলটি লিখুন:");
    
    if (email) {
        // Firebase SDK লোড করা থাকলে এই অংশটি কাজ করবে
        if (typeof firebase !== "undefined") {
            firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                    alert("পাসওয়ার্ড রিসেট করার লিঙ্ক আপনার ইমেইলে পাঠানো হয়েছে। ইনবক্স চেক করুন।");
                })
                .catch((error) => {
                    alert("ত্রুটি: " + error.message);
                });
        } else {
            alert("Firebase কানেক্ট করা নেই। দয়া করে প্রজেক্টে Firebase SDK যোগ করুন।");
        }
    }
}

// registation
/**
 * রক্তদাতা নিবন্ধনের ফাংশন
 */
function register() {
    // ইনপুট ভ্যালুগুলো ধরা
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const fb = document.getElementById('fb').value.trim();
    const bloodGroup = document.getElementById('bloodGroup').value;

    // ভ্যালিডেশন চেক
    if (name === "" || phone === "" || bloodGroup === "") {
        alert("অনুগ্রহ করে নাম, ফোন নম্বর এবং রক্তের গ্রুপ সঠিকভাবে পূরণ করুন!");
        return;
    }

    // ফোন নম্বর ১১ ডিজিট কি না তা চেক করার জন্য বাড়তি একটি চেক (ঐচ্ছিক)
    if (phone.length < 11) {
        alert("অনুগ্রহ করে সঠিক ফোন নম্বর প্রদান করুন।");
        return;
    }

    // সফল নিবন্ধনের মেসেজ (পরবর্তীতে এখানে Firebase/Database কোড যুক্ত হবে)
    alert("ধন্যবাদ " + name + "! আপনার তথ্য সফলভাবে জমা হয়েছে।");
    
    // ফর্ম ক্লিয়ার করা
    clearForm();
}

/**
 * ফর্ম ইনপুট রিসেট করার ফাংশন
 */
function clearForm() {
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('fb').value = "";
    document.getElementById('bloodGroup').value = "";
}

// for save
// আপনার আগের ইম্পোর্ট এবং কনফিগ কোডগুলো উপরে থাকবে...

window.registerDonor = async function() {
    const name = document.getElementById('donorName').value;
    const group = document.getElementById('bloodGroup').value;
    const phone = document.getElementById('phoneNumber').value;

    if(name === "" || group === "" || phone === "") {
        alert("দয়া করে সব তথ্য পূরণ করুন!");
        return;
    }

    try {
        const docRef = await addDoc(collection(db, "donors"), {
            name: name,
            bloodGroup: group,
            phone: phone,
            timestamp: new Date()
        });
        alert("ডোনার সফলভাবে সেভ হয়েছে!");
        
        // ফরম খালি করা
        document.getElementById('donorName').value = "";
        document.getElementById('bloodGroup').value = "";
        document.getElementById('phoneNumber').value = "";
        
    } catch (e) {
        console.error("Error adding donor: ", e);
        alert("ডাটা সেভ করতে সমস্যা হয়েছে!");
    }
}
// fairbase connect

// index.js
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

window.registerDonor = async function() {
    const name = document.getElementById("name").value; // আপনার ইনপুটের আইডি দেখে নেবেন
    const bloodGroup = document.getElementById("bloodGroup").value;
    const phone = document.getElementById("phoneNumber").value;

    try {
        const docRef = await addDoc(collection(window.db, "users"), {
            name: name,
            blood_group: bloodGroup,
            phone_number: phone,
            location: "Home"
        });
        alert("সফলভাবে রেজিস্ট্রেশন হয়েছে! ID: " + docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("এরর হয়েছে, কনসোল চেক করুন।");
    }
}
