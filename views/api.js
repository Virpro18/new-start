const btn = document.getElementById("btn").addEventListener("click", () => {
  const inp = document.getElementById("inp").value;
  const data = {
    data: inp,
  };
  fetch(`/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});
