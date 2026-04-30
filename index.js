

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// ডাটাবেজ কানেক্ট করা
const db = getFirestore();

// ফর্ম সাবমিট হ্যান্ডলার
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // ইনপুট ফিল্ড থেকে তথ্য নেওয়া
        const name = document.getElementById("userName").value;
        const phone = document.getElementById("userPhone").value;
        const fb = document.getElementById("userFb").value;
        const blood = document.getElementById("userBlood").value;

        try {
            // "users" কালেকশনে ডেটা পাঠানো
            await addDoc(collection(db, "users"), {
                name: name,
                phone: phone,
                fb_link: fb,
                blood_group: blood,
                timestamp: new Date()
            });
            
            alert("সফলভাবে নিবন্ধন সম্পন্ন হয়েছে!");
            registrationForm.reset();
        } catch (error) {
            console.error("Error: ", error);
            alert("ডেটা সেভ করা যায়নি।");
        }
    });
}



// ১. শুরুতে ইমপোর্ট (একবার মাত্র)
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ২. রক্তদাতা রেজিস্ট্রেশন ফাংশন
window.registerDonor = async function() {
    console.log("Button clicked!");
    
    const name = document.getElementById("name")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const fb = document.getElementById("fb")?.value.trim();
    const bloodGroup = document.getElementById("bloodGroup")?.value;

    if (!name || !phone || !bloodGroup) {
        alert("এরর: নাম, ফোন এবং রক্তের গ্রুপ খালি আছে!");
        return;
    }

    try {
        if (!window.db) {
            alert("এরর: ডেটাবেস কানেকশন পাওয়া যায়নি!");
            return;
        }

        const docRef = await addDoc(collection(window.db, "users"), {
            name: name,
            phone_number: phone,
            fb_link: fb,
            blood_group: bloodGroup,
            location: "Home"
        });
        
        alert("সফলভাবে রেজিস্ট্রেশন হয়েছে! ID: " + docRef.id);
        
        // ফর্ম ক্লিয়ার করা
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("fb").value = "";
        document.getElementById("bloodGroup").value = "";
    } catch (e) {
        console.error("Firebase Error: ", e);
        alert("এরর: " + e.message);
    }
}

// ৩. রক্তদাতা খোঁজার ফাংশন
window.searchDonor = function() {
    const group = document.getElementById('searchBloodGroup').value;
    if (group) {
        alert(group + " গ্রুপের রক্তদাতার তথ্য খুঁজছি...");
    } else {
        alert("অনুগ্রহ করে রক্তের গ্রুপ নির্বাচন করুন!");
    }
}

// ৪. লগইন ফর্ম হ্যান্ডলার
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const msg = document.getElementById('message');

        if ((user === "admin" || user === "user") && pass === "1234") {
            msg.style.color = "green";
            msg.textContent = "Login Successful!";
        } else {
            msg.style.color = "red";
            msg.textContent = "Invalid username or password!";
        }
    });
}

// ৫. পাসওয়ার্ড রিসেট ফাংশন
window.forgotPassword = function() {
    const email = prompt("আপনার রেজিস্টার্ড ইমেইলটি লিখুন:");
    if (email) {
        alert("পাসওয়ার্ড রিসেট করার লিঙ্ক " + email + " এ পাঠানো হয়েছে (টেস্ট মোড)।");
    }
}

console.log("রক্তসৈনিক বাংলাদেশ ফাউন্ডেশন অ্যাপ লোড হয়েছে।");
