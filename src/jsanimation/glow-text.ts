// glow-text.js
export function initGlowingText() {


  const textElement = document.getElementById("glowing_text");
  if (!textElement) return;

  // Tokenize text (keep spaces and ·)
  const tokens = textElement.textContent.split(/(\s+|·)/);

  // Wrap only words in spans
  textElement.innerHTML = tokens
    .map(token =>
      token === "·" || token.trim() === ""
        ? token
        : `<span>${token}</span>`
    )
    .join("");

  const words = [...textElement.querySelectorAll("span")];
  let index = 0;

  const intervalId = setInterval(() => {
    words.forEach(word => word.classList.remove("glow"));
    words[index].classList.add("glow");
    index = (index + 1) % words.length;
  }, 800);

  return () => clearInterval(intervalId);
}
