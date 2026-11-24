const PROFILE = {
  name:         { ru: "Жежу Пётр", en: "Zhezhu Peter" },
  role:         { ru: "Веб-дизайнер (стажёр)", en: "Web Designer (Intern)" },
  birthDate:    "2007-03-25",
  city:         { ru: "Москва, Сергиев Посад", en: "Moscow, Sergiev Posad" },
  timeZone:     "Europe/Moscow",
  email:        "petr.zh@gmail.com",
  phone:        "+7 916 746 63 36",
  github:       "https://github.com/GDRX01/portfolio",
  photo:        "",
  openToWork:   true,
  availability: { ru: "Готов к удалённой работе", en: "Open to remote work" },
  formEndpoint: "",
  statement:    {
    ru: "Веб-дизайнер-стажёр со знанием фронтенда. Рисую макеты в Figma, которые легко и точно переносятся в код.",
    en: "Intern web designer with a frontend background. I design in Figma, and my layouts translate cleanly into code."
  },
  about: {
    ru: "Студент 4 курса СПК, специальность «Информационные системы и программирование». Благодаря базе во фронтенде (HTML, CSS, JS) и UI-тестированию делаю макеты, которые легко и корректно переносятся в код. Активно использую AI-инструменты для идей, прототипов и ускорения задач.",
    en: "3rd-year student at SPK, majoring in Information Systems and Programming. With a frontend base (HTML, CSS, JS) and UI testing experience, I make layouts that move into code easily and correctly. I use AI tools for ideas, prototyping and speeding up routine work."
  },
  goal: {
    ru: "Ищу позицию стажёра веб-дизайнера и команду, в которой можно расти.",
    en: "I’m looking for a web design internship and a team to grow with."
  },
  education: { ru: "СПК, 4 курс. Информационные системы и программирование", en: "SPK, year 4. Information Systems and Programming" },
  english:   "B1/B2"
};

const SKILLS = [
  { title: { ru: "Дизайн", en: "Design" }, items: [
    { label: "Figma", icon: "icons/Figma.svg" }, { label: "Photoshop", icon: "icons/AdobePhotoshop.svg" },
    { label: "Illustrator", icon: "icons/AdobeIllustrator.svg" },
    { label: { ru: "UI-дизайн", en: "UI design" }, icon: "icons/UI.svg" },
    { label: { ru: "UX-дизайн", en: "UX design" }, icon: "icons/UX.svg" },
    { ru: "Адаптивный дизайн", en: "Responsive design" }, { ru: "Вайрфрейминг", en: "Wireframing" } ] },
  { title: { ru: "AI-инструменты", en: "AI tools" }, items: [
    { label: "ChatGPT", icon: "icons/ChatGPT.svg" }, { label: "Claude", icon: "icons/Claude.svg" },
    { ru: "Генерация визуала и UI", en: "Visual and UI generation" } ] },
  { title: { ru: "Вёрстка", en: "Frontend" }, items: [
    { label: "HTML5", icon: "icons/HTML.svg" }, { label: "CSS3", icon: "icons/CSS.svg" },
    { label: "JavaScript", icon: "icons/JS.svg" }, { label: "React", icon: "icons/React.svg" },
    { label: "Next.js", icon: "icons/NextJS.svg", wordmark: true },
    { label: "GitHub", icon: "icons/GitHub.svg" },
    { ru: "React и Next.js: базовый уровень", en: "React and Next.js: basic level" },
    { ru: "Адаптивная вёрстка", en: "Responsive layout" } ] },
  { title: { ru: "Тестирование", en: "Testing" }, items: [
    { ru: "UI-тестирование", en: "UI testing" }, { ru: "Кросс-браузерная проверка", en: "Cross-browser checks" } ] },
  { title: { ru: "Личные качества", en: "Personal" }, items: [
    { ru: "Усидчивость", en: "Perseverance" }, { ru: "Внимание к деталям", en: "Attention to detail" },
    { ru: "Быстро учусь", en: "Fast learner" }, { ru: "Грамотная письменная речь", en: "Clear writing" },
    { ru: "Ответственность за результат", en: "Ownership of results" } ] }
];

const EXPERIENCE = [
  { title: { ru: "Практика в ООО «АВЗ» и ИП «СпецСервис»", en: "Internships at “AVZ” LLC and “SpecService”" },
    text:  { ru: "Спроектировал и реализовал лендинги для обеих компаний.", en: "Designed and built landing pages for both companies." } },
  { title: { ru: "Лендинг от структуры до тестов", en: "Landing page, structure to testing" },
    text:  { ru: "Спроектировал структуру, сверстал адаптивную страницу с интерактивными элементами и провёл UI-тестирование.", en: "Planned the structure, built a responsive page with interactive elements and ran UI testing." } },
  { title: { ru: "Учебный Telegram-бот", en: "Learning Telegram bot" },
    text:  { ru: "Автоматизирует ответы. Провёл UX-тестирование, чтобы интерфейс был понятнее.", en: "Automates replies. I ran UX tests to make the interface clearer." } },
  { title: { ru: "SMM и продвижение", en: "SMM and promotion" },
    text:  { ru: "Осваиваю продвижение страниц в соцсетях.", en: "Learning how to promote pages on social networks." } }
];

const PROJECTS = [
  { kind: "design", image: "images/avz_landing_page.webp",
    url: "https://www.figma.com/design/7f3tupnlr6bnOR2Qx2AfcT/Untitled?node-id=0-1&p=f&t=KIPaGQrxqLxK7X67-0",
    title: { ru: "Лендинг для ООО «АВЗ»", en: "Landing page for “AVZ” LLC" },
    text:  { ru: "Макет лендинга для компании, сделанный на производственной практике.", en: "Landing page mockup for a company, made during an internship." } },
  { kind: "design", image: "images/unforgettable_travels.webp",
    url: "https://www.figma.com/design/69ecr6Ji89ps8MBBO7isuD/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82%D1%8B--%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB-?node-id=0-1&p=f&t=SPpJOHKWBLMipkfe-0",
    title: { ru: "Лендинг «Незабываемые путешествия»", en: "Landing page “Unforgettable Travels”" },
    text:  { ru: "Макет лендинга для туристической компании.", en: "Landing page mockup for a travel company." } },
  { kind: "design", image: "images/profile_card_ui.webp",
    url: "https://www.figma.com/design/VdOlEJd7Z5oMeSTwBmOLov/Profile-Card--UI-?node-id=0-1&p=f&t=0NKi6bLsrDNQkjaE-0",
    title: { ru: "Карточка социального профиля", en: "Social profile card" },
    text:  { ru: "UI-компонент для социальной сети.", en: "A UI component for a social network." } },
  { kind: "design", image: "images/1_tech.webp",
    url: "https://www.figma.com/design/FgrC9N0TuI9zvXVUgDIuac/Landing-Page?m=auto&t=AdpYch9BOgVwrhHa-6",
    title: { ru: "Учебный лендинг по мотивам 1tech.com", en: "Study landing page based on 1tech.com" },
    text:  { ru: "Учебный макет: разбор и пересборка структуры существующего сайта.", en: "A study mockup: rebuilding the structure of an existing site." } },
  { kind: "code", image: "images/kolonka_blog.webp",
    url: "https://kolonka-app.vercel.app/",
    title: { ru: "Колонка", en: "Kolonka" },
    text:  { ru: "Личный проект: информационный сайт-блог с колонками статей.", en: "Pet project: an informational blog site with article columns." } }
];

const QUOTES = [
  { ru: "Хороший дизайн - это как можно меньше дизайна.", en: "Good design is as little design as possible.", by: "Dieter Rams" },
  { ru: "Дизайн - это не только то, как вещь выглядит. Дизайн - это то, как она работает.", en: "Design is not just what it looks like and feels like. Design is how it works.", by: "Steve Jobs" },
  { ru: "Детали - это не просто детали. Они создают дизайн.", en: "The details are not the details. They make the design.", by: "Charles Eames" },
  { ru: "Совершенство достигается не тогда, когда нечего добавить, а когда нечего убрать.", en: "Perfection is achieved when there is nothing left to take away.", by: "Antoine de Saint-Exupéry" }
];

const UI = {
  ru: {
    navWorks: "Работы", navAbout: "Обо мне", navContact: "Контакты", contactBtn: "Связаться",
    worksTitle: "Избранные работы",
    worksSub: "Макеты и проекты с практики и учёбы. Каждая карточка ведёт к самой работе.",
    fAll: "Все", fDesign: "Макеты", fCode: "Код", site: "Сайт", soon: "Ссылка скоро",
    aboutTitle: "Обо мне", factAge: "Возраст", factCity: "Город", factEdu: "Учёба", factEng: "Английский", factFormat: "Формат",
    skillsTitle: "Навыки", expTitle: "Опыт и проекты",
    contactTitle: "Напишите мне", fName: "Имя", fEmail: "Почта", fMsg: "Сообщение", send: "Отправить",
    errName: "Введите имя: минимум 2 символа.",
    errEmail: "Введите почту в формате name@example.com.",
    errMsg: "Напишите сообщение: минимум 10 символов.",
    sentMail: "Письмо подготовлено в вашей почте. Нажмите там «Отправить».",
    sentOk: "Сообщение отправлено. Отвечу на указанную почту.",
    errSend: "Не удалось отправить. Напишите мне на почту напрямую.",
    quote: "Цитата дня", years: "© "
  },
  en: {
    navWorks: "Works", navAbout: "About", navContact: "Contact", contactBtn: "Get in touch",
    worksTitle: "Selected Works",
    worksSub: "Mockups and projects from internships and studies. Each card opens the work itself.",
    fAll: "All", fDesign: "Mockups", fCode: "Code", site: "Site", soon: "Link soon",
    aboutTitle: "About", factAge: "Age", factCity: "City", factEdu: "Education", factEng: "English", factFormat: "Format",
    skillsTitle: "Skills", expTitle: "Experience and projects",
    contactTitle: "Get in touch", fName: "Name", fEmail: "Email", fMsg: "Message", send: "Send",
    errName: "Enter your name: at least 2 characters.",
    errEmail: "Enter an email like name@example.com.",
    errMsg: "Write a message: at least 10 characters.",
    sentMail: "The email is ready in your mail app. Press Send there.",
    sentOk: "Message sent. I’ll reply to the email you gave.",
    errSend: "Could not send. Please email me directly.",
    quote: "Quote of the day", years: "© "
  }
};

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get: k => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch {} }
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let lang = store.get("lang") === "en" ? "en" : "ru";
let filter = "all";
const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
const t = v => (v && typeof v === "object") ? v[lang] : v;

function age() {
  const b = new Date(PROFILE.birthDate), n = new Date();
  let a = n.getFullYear() - b.getFullYear();
  if (n < new Date(n.getFullYear(), b.getUTCMonth(), b.getUTCDate())) a--;
  return a;
}
function ageText() {
  const a = age();
  if (lang === "en") return `${a} years old`;
  const w = { one: "год", few: "года" }[new Intl.PluralRules("ru").select(a)] || "лет";
  return `${a} ${w}`;
}

function fit() {
  const h = $("h1"), s = $("#name");
  h.style.fontSize = "100px";
  h.style.fontSize = (100 * h.clientWidth / s.getBoundingClientRect().width * 0.995) + "px";
}

function tick() {
  const d = new Date(), loc = lang === "ru" ? "ru-RU" : "en-GB", o = { timeZone: PROFILE.timeZone };
  const time = d.toLocaleTimeString(loc, { ...o, hourCycle: "h23" });
  const date = d.toLocaleDateString(loc, { ...o, weekday: "long", day: "numeric", month: "long" });
  $("#mCity").innerHTML = `${esc(t(PROFILE.city))}, ${time}<br>${esc(date)}`;
}

function renderWorks() {
  const U = UI[lang];
  $("#grid").innerHTML = PROJECTS.filter(p => filter === "all" || p.kind === filter).map(p => {
    const media = p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : "";
    const label = p.url ? (p.kind === "design" ? "Figma" : U.site) : U.soon;
    const inner = `<div class="media">${media}</div><h3><span>${esc(t(p.title))}</span><span class="tag">${esc(label)}</span></h3><p>${esc(t(p.text))}</p>`;
    return p.url
      ? `<a class="card" href="${esc(p.url)}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="card off">${inner}</div>`;
  }).join("");
}

function renderFilters() {
  const U = UI[lang];
  $("#filters").innerHTML = [["all", U.fAll], ["design", U.fDesign], ["code", U.fCode]]
    .map(([k, l]) => `<button type="button" data-f="${k}" aria-pressed="${k === filter}">${esc(l)}</button>`).join("");
}

function clearErrors() {
  $$(".err,#status").forEach(e => e.textContent = "");
  $$("[aria-invalid]").forEach(e => e.removeAttribute("aria-invalid"));
}

function render() {
  const U = UI[lang], name = t(PROFILE.name), [first, ...rest] = name.split(" "), last = rest.join(" ");
  document.documentElement.lang = lang;
  document.title = `${name} - ${t(PROFILE.role)}`;
  $("meta[name=description]").content = t(PROFILE.statement);
  $$("[data-k]").forEach(e => e.textContent = U[e.dataset.k]);

  $("#logo").textContent = last ? `${first}.${last[0]}` : first;
  $("#name").textContent = name;
  $("#lead").textContent = t(PROFILE.statement);
  $("#mRole").textContent = t(PROFILE.role);
  $("#mAvail").innerHTML = `${PROFILE.openToWork ? '<span class="dot"></span>' : ""}${esc(t(PROFILE.availability))}`;
  $("#lang").textContent = lang === "ru" ? "EN" : "RU";
  $("#lang").setAttribute("aria-label", lang === "ru" ? "Switch to English" : "Переключить на русский");

  $("#aboutText").textContent = t(PROFILE.about);
  $("#facts").innerHTML = [
    [U.factAge, ageText()], [U.factCity, t(PROFILE.city)], [U.factEdu, t(PROFILE.education)],
    [U.factEng, PROFILE.english], [U.factFormat, t(PROFILE.availability)]
  ].map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  $("#skills").innerHTML = SKILLS.map(g => {
    const tools = g.items.filter(i => i.icon), rest = g.items.filter(i => !i.icon);
    return `<div><h3>${esc(t(g.title))}</h3>`
      + (tools.length ? `<ul class="tools">${tools.map(i => i.wordmark
        ? `<li class="wordmark"><img src="${esc(i.icon)}" alt="${esc(t(i.label))}"></li>`
        : `<li><img src="${esc(i.icon)}" alt="">${esc(t(i.label))}</li>`).join("")}</ul>` : "")
      + (rest.length ? `<ul>${rest.map(i => `<li>${esc(t(i))}</li>`).join("")}</ul>` : "")
      + `</div>`;
  }).join("");
  $("#exp").innerHTML = EXPERIENCE.map(e =>
    `<div><h3>${esc(t(e.title))}</h3><p>${esc(t(e.text))}</p></div>`).join("");

  $("#goal").textContent = t(PROFILE.goal);
  $("#mail").textContent = PROFILE.email; $("#mail").href = ``;
  $("#phone").textContent = PROFILE.phone; $("#phone").href = `tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`;
  const gh = $("#github");
  gh.style.display = PROFILE.github ? "" : "none";
  gh.href = PROFILE.github;
  gh.innerHTML = `<img src="icons/GitHub.svg" alt="">GitHub`;
  $("#quote").textContent = t(quote);
  $("#quoteBy").textContent = quote.by;
  $("#copy").textContent = `${U.years}${new Date().getFullYear()} ${name}`;

  renderFilters(); renderWorks(); clearErrors(); tick(); fit();
}

$("#lang").onclick = () => { lang = lang === "ru" ? "en" : "ru"; store.set("lang", lang); render(); };
$("#filters").onclick = e => {
  const b = e.target.closest("button"); if (!b) return;
  filter = b.dataset.f;
  $$("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  renderWorks();
};

const post = d => fetch(PROFILE.formEndpoint, {
  method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d)
}).then(r => r.ok).catch(() => false);

$("#form").addEventListener("submit", async e => {
  e.preventDefault();
  const U = UI[lang], f = e.target, v = Object.fromEntries(new FormData(f));
  const errs = {};
  if (v.name.trim().length < 2) errs.name = U.errName;
  if (!EMAIL_RE.test(v.email.trim())) errs.email = U.errEmail;
  if (v.message.trim().length < 10) errs.message = U.errMsg;
  clearErrors();
  for (const k of ["name", "email", "message"]) {
    $(`#e-${k}`).textContent = errs[k] || "";
    if (errs[k]) f[k].setAttribute("aria-invalid", "true");
  }
  const bad = Object.keys(errs)[0];
  if (bad) { f[bad].focus(); return; }

  const data = { name: v.name.trim(), email: v.email.trim(), message: v.message.trim() };
  if (PROFILE.formEndpoint) {
    const ok = await post(data);
    $("#status").textContent = ok ? U.sentOk : U.errSend;
    if (ok) f.reset();
  } else {

    location.href = `${PROFILE.email}?subject=${encodeURIComponent(data.name)}&body=${encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`)}`;
    $("#status").textContent = U.sentMail;
  }
});

render();
setInterval(tick, 1000);
addEventListener("resize", fit);
document.fonts && document.fonts.ready.then(fit);

const hideLoader = () => setTimeout(() => $("#loader").classList.add("done"), 700);
document.readyState === "complete" ? hideLoader() : addEventListener("load", hideLoader);
setTimeout(() => $("#loader").classList.add("done"), 3500);
