function getAdvice() {

  let task = document.getElementById("task").value.toLowerCase();
  let time = document.getElementById("time").value;
  let distraction = document.getElementById("distraction").value;
  let output = document.getElementById("output");
  let score = document.getElementById("score");
  let habit = document.getElementById("habit");

  if (task === "") {
    output.innerHTML = "Please enter a task first!";
    return;
  }

  let advice = "";
  let productivityScore = 60;

  if (task.includes("study") || task.includes("read")) {
    advice = "📘 Study in short focused sessions.";
    productivityScore = 80;
  }
  else if (task.includes("exercise")) {
    advice = "💪 Exercise will boost your energy.";
    productivityScore = 75;
  }
  else if (task.includes("homework") || task.includes("hw")) {
    advice = "✏️ Finish homework early.";
    productivityScore = 70;
  }
  else {
    advice = "✅ Manage your time wisely.";
    productivityScore = 65;
  }

  if (time === "morning") {
    advice += " Since you are a morning person, do important work early.";
  }
  else {
    advice += " Since you are an evening person, start with lighter tasks.";
  }

  if (distraction === "yes") {
    advice += " Try avoiding your phone for 20 minutes.";
    productivityScore -= 5;
  }

  output.innerHTML = advice;
  let message = "";
// Habit Learning

if (time === "morning" && distraction === "no") {

  habit.innerHTML =
  "🧠 AI Observation: You seem to work best in the morning. Try scheduling your most important tasks early.";

}

else if (time === "evening" && distraction === "no") {

  habit.innerHTML =
  "🧠 AI Observation: You appear to be more productive in the evening. Plan your important work later in the day.";

}

else if (distraction === "yes") {

  habit.innerHTML =
  "🧠 AI Observation: You often report distractions. Try keeping your phone away while working for better focus.";

}
if (productivityScore >= 80) {
  message = "🌟 Excellent! You had a productive day.";
}
else if (productivityScore >= 60) {
  message = "😊 Good job! Keep improving every day.";
}
else {
  message = "💪 Keep going! Tomorrow is another chance to improve.";
}

score.innerHTML =
"⭐ Productivity Score: " +
productivityScore +
"/100<br><br>" +
message;

function addTask() {

  let task = document.getElementById("task").value;
  let list = document.getElementById("taskList");

  if (task === "") {
    return;
  }

  let priority = "";

  let lowerTask = task.toLowerCase();

  // AI decides priority using keywords

  if (
    lowerTask.includes("exam") ||
    lowerTask.includes("physics") ||
    lowerTask.includes("chemistry") ||
    lowerTask.includes("math") ||
    lowerTask.includes("assignment") ||
    lowerTask.includes("project")
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

  let li = document.createElement("li");

  li.innerHTML =
    '<input type="checkbox" class="taskCheck"> ' +
    "<b>" + priority + "</b> | " +
    task;

  list.appendChild(li);

  document.getElementById("task").value = "";

}

function reflection() {

  let reflectionOutput = document.getElementById("reflectionOutput");

  let today = new Date().toLocaleDateString();

  let checks = document.querySelectorAll(".taskCheck");

  let totalTasks = checks.length;
  let completedTasks = 0;

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

  let coachMessage = "";
  let suggestion = "";

  if (productivityScore >= 80) {

    coachMessage = "Excellent work! You stayed consistent and completed most of your tasks today.";
    suggestion = "Keep following this routine tomorrow.";

  }

  else if (productivityScore >= 50) {

    coachMessage = "Good effort! You completed several tasks today.";
    suggestion = "Try completing your remaining tasks earlier tomorrow.";

  }

  else {

    coachMessage = "Don't worry. Every productive journey has slow days.";
    suggestion = "Start with one small task tomorrow and build momentum.";

  }

  let quotes = [
    "Success is the sum of small efforts repeated every day.",
    "Small progress is still progress.",
    "Believe in yourself and keep going.",
    "Discipline is stronger than motivation."
  ];

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  reflectionOutput.innerHTML =

  "🌙 <b>Today's AI Daily Review</b><br><br>" +

  "📅 Date: " + today + "<br><br>" +

  "📋 Total Tasks: " + totalTasks + "<br>" +

  "✅ Completed Tasks: " + completedTasks + "<br>" +

  "📝 Pending Tasks: " + pendingTasks + "<br><br>" +

  "⭐ Productivity Score: " + productivityScore + "/100<br><br>" +

  "🤖 <b>Coach's Feedback:</b><br>" +

  coachMessage + "<br><br>" +

  "💡 <b>Suggestion for Tomorrow:</b><br>" +

  suggestion + "<br><br>" +

  "📖 <b>Quote of the Day:</b><br>" +

  "\"" + randomQuote + "\"";

}