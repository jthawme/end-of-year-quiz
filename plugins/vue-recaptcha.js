export default function(context) {
  if (process.client) {
    if (document.getElementById("recaptcha")) {
      return;
    }
    const KEY = context.env.recaptcha;

    const s = document.getElementsByTagName("head")[0];
    const f = document.createElement("script");
    f.async = 1;
    f.id = "recaptcha";
    f.src = `https://www.google.com/recaptcha/api.js?render=${KEY}`;
    s.appendChild(f);
  }
}
