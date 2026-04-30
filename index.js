// ১. শুরুতে ইমপোর্ট (Firebase Firestore)
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ২. রক্তদাতা রেজিস্ট্রেশন ফাংশন (Firebase এর জন্য)
window.registerDonor = async function() {
    const name = document.getElementById("name").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value;
    const phone = document.getElementById("phoneNumber").value.trim();

    if (!name || !bloodGroup || !phone) {
        alert("অনুগ্রহ করে সব তথ্য সঠিকভাবে পূরণ করুন!");
        return;
    }

    try {
        const docRef = await addDoc(collection(window.db, "users"), {
            name: name,
            blood_group: bloodGroup,
            phone_number: phone,
            location: "Home"
        });
        alert("সফলভাবে রেজিস্ট্রেশন হয়েছে! ID: " + docRef.id);
        clearForm(); // ফর্ম খালি করার জন্য
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("এরর হয়েছে, কনসোল চেক করুন।");
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

// ৪. ফর্ম ক্লিয়ার করার ফাংশন
function clearForm() {
    document.getElementById('name').value = "";
    document.getElementById('phoneNumber').value = "";
    document.getElementById('fb').value = "";
    document.getElementById('bloodGroup').value = "";
}

// ৫. লগইন ফর্ম হ্যান্ডলার (Admin & User)
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

// ৬. পাসওয়ার্ড রিসেট (Firebase Auth এর জন্য)
window.forgotPassword = function() {
    const email = prompt("আপনার রেজিস্টার্ড ইমেইলটি লিখুন:");
    if (email) {
        if (typeof firebase !== "undefined") {
            firebase.auth().sendPasswordResetEmail(email)
                .then(() => alert("পাসওয়ার্ড রিসেট লিঙ্ক পাঠানো হয়েছে।"))
                .catch((error) => alert("ত্রুটি: " + error.message));
        } else {
            alert("Firebase Auth কানেক্ট করা নেই।");
        }
    }
}

console.log("রক্তসৈনিক বাংলাদেশ ফাউন্ডেশন অ্যাপ লোড হয়েছে।");
