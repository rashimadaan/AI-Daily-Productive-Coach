// ===============================
// AI DAILY PRODUCTIVE COACH
// Created by Rashi Madaan
// Class 12 AI Capstone Project
// ===============================

// Gives AI advice based on the user's task

function getAdvice() {

    let task = document.getElementById("task").value.toLowerCase();

    let time = document.getElementById("time").value;

    let distraction = document.getElementById("distraction").value;

    let output = document.getElementById("output");

    let score = document.getElementById("score");

    let habit = document.getElementById("habit");


    if (task === "") {

        output.innerHTML = "⚠️ Please enter a task first.";

        return;

    }


    let advice = "";

    let productivityScore = 60;


    // AI gives advice according to the task

    if (task.includes("study") || task.includes("read")) {

        advice = "📘 Try studying in 25-minute focused sessions with short breaks.";

        productivityScore = 85;

    }

    else if (task.includes("homework") || task.includes("assignment")) {

        advice = "✏️ Complete your homework early so you have time for revision.";

        productivityScore = 75;

    }

    else if (task.includes("exercise") || task.includes("workout")) {

        advice = "Great choice! Exercise improves both physical and mental health. 💪";

        productivityScore = 80;

    }

    else if (task.includes("project")) {

        advice = "💻 Divide your project into smaller parts and complete one step at a time.";

        productivityScore = 80;

    }

    else {

        advice = "Stay organised and complete one task before starting another.✅ ";

        productivityScore = 65;

    }


    // Time Preference

    if (time === "morning") {

        advice += "<br><br> Since you are a morning person, complete your important work before noon.🌞";

    }

    else {

        advice += "<br><br> Since you are an evening person, start with lighter tasks and do difficult work later.🌙 ";

    }


    // Distraction Check

    if (distraction === "yes") {

        advice += "<br><br>Try keeping your phone away for at least 20 minutes while working.📵";

        productivityScore -= 5;

    }


    output.innerHTML = advice;


    // Productivity Message

    let message = "";

    if (productivityScore >= 80) {

        message = "Excellent! You're having a productive day.🌟";

    }

    else if (productivityScore >= 60) {

        message = "Good job! Keep improving every day.😊";

    }

    else {

        message = "Keep going. Small progress is still progress.💪";

    }


    score.innerHTML =
        "⭐ Productivity Score: <b> " +
        productivityScore +
        "/100</b><br><br>" +
        message;


    // Habit Learning

    if (time === "morning" && distraction === "no") {

        habit.innerHTML =
            "<b>AI Observation:</b> You seem to work best in the morning. Try planning your important tasks before lunch.🧠";

    }

    else if (time === "evening" && distraction === "no") {

        habit.innerHTML =
            "<b>AI Observation:</b> You appear to be more productive in the evening. Schedule difficult work later in the day.🧠";

    }

    else {

        habit.innerHTML =
            "<b>AI Observation:</b> You often experience distractions. Reducing screen time while working may improve your productivity.🧠";

    }

} 
// ===============================
// SMART TASK PLANNER
// ===============================

function addTask() {

    let task = document.getElementById("task").value.trim();

    let list = document.getElementById("taskList");

    if (task === "") {

        alert("Please enter a task first.");

        return;

    }

    let priority = "";

    let lowerTask = task.toLowerCase();

    // AI decides task priority using keywords

    if (
        lowerTask.includes("exam") ||
        lowerTask.includes("physics") ||
        lowerTask.includes("chemistry") ||
        lowerTask.includes("math") ||
        lowerTask.includes("project") ||
        lowerTask.includes("assignment")
    ) {

        priority = "🔴 High Priority";

    }

    else if (
        lowerTask.includes("study") ||
        lowerTask.includes("read") ||
        lowerTask.includes("homework")
    ) {

        priority = "🟠 Medium Priority";

    }

    else {

        priority = "🟢 Low Priority";

    }


    // Create Task

    let li = document.createElement("li");


    li.innerHTML =

    '<input type="checkbox" class="taskCheck" onchange="completeTask(this)">' +

    '<span style="margin-left:10px;">' +

    "<b>" + priority + "</b> | " +

    task +

    "</span> " +

    '<button onclick="deleteTask(this)" style="float:right;background:#ff9aa2;">🗑️</button>';


    list.appendChild(li);


    document.getElementById("task").value = "";

}



// ===============================
// COMPLETE TASK
// ===============================

function completeTask(checkbox) {

    let taskText = checkbox.nextElementSibling;

    if (checkbox.checked) {

        taskText.style.textDecoration = "line-through";

        taskText.style.color = "gray";

        taskText.style.opacity = "0.6";

    }

    else {

        taskText.style.textDecoration = "none";

        taskText.style.color = "black";

        taskText.style.opacity = "1";

    }

}



// ===============================
// DELETE TASK
// ===============================

function deleteTask(button) {

    let task = button.parentElement;

    task.remove();

}// ===============================
// AI DAILY REVIEW
// ===============================

function reflection() {

    let reflectionOutput = document.getElementById("reflectionOutput");

    let today = new Date().toLocaleDateString();

    let checks = document.querySelectorAll(".taskCheck");

    let totalTasks = checks.length;

    let completedTasks = 0;


    // Count completed tasks

    for (let i = 0; i < checks.length; i++) {

        if (checks[i].checked) {

            completedTasks++;

        }

    }


    let pendingTasks = totalTasks - completedTasks;

    let productivityScore = 0;

    if (totalTasks > 0) {

        productivityScore = Math.round((completedTasks / totalTasks) * 100);

    }


    // Progress Bar

    let progressBar = document.getElementById("progressBar");

    if (progressBar) {

        progressBar.style.width = productivityScore + "%";

    }


    // Coach Feedback

    let coachMessage = "";

    let suggestion = "";


    if (productivityScore >= 80) {

        coachMessage =
        "Excellent work! You completed most of your planned tasks today.";

        suggestion =
        "Keep following the same routine tomorrow.";

    }

    else if (productivityScore >= 50) {

        coachMessage =
        "Good effort! You completed several tasks today.";

        suggestion =
        "Try completing your remaining tasks a little earlier tomorrow.";

    }

    else {

        coachMessage =
        "Don't worry. Every productive journey has slow days.";

        suggestion =
        "Start with one small task tomorrow and build momentum.";

    }


    // Daily Motivation

    let quotes = [

        "Success is the sum of small efforts repeated every day.",

        "Small progress is still progress.",

        "Believe in yourself and keep going.",

        "Discipline is stronger than motivation.",

        "Dream big. Start small. Stay consistent.",

        "The future depends on what you do today."

    ];


    let randomQuote =

    quotes[Math.floor(Math.random() * quotes.length)];


    // Display Review

    reflectionOutput.innerHTML =

    "📅 <b>Date:</b>" + today +

    "<br><br>" +

    "📋 <b>Total Tasks:</b> " + totalTasks +

    "<br>" +

    "✅ <b>Completed:</b>" + completedTasks +

    "<br>" +

    "📝 <b>Pending:</b> " + pendingTasks +

    "<br><br>" +

    "⭐ <b>Productivity Score:</b>  " +

    productivityScore +

    "/100" +

    "<br><br>" +

    "<b>Coach's Feedback:</b><br>🤖 " +

    coachMessage +

    "<br><br>" +

    "<b>Suggestion for Tomorrow:</b><br>💡 " +

    suggestion +

    "<br><br>" +

    "<b>Quote of the Day:</b><br>📖 " +

    "\"" + randomQuote + "\"";

}
