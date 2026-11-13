/* ============================================================
   script.js = THE WORKING of your website
   Buttons, search, language change - this file makes it work.
   ★ NEVER EDIT THIS FILE ★  (words are in data.js)
   ============================================================ */
/* ================= APP LOGIC ================= */
      var lang = "en";
      var activeSection = "all";
      var ICONS = {
        passport: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 18c.7-1.3 2.2-2 4-2s3.3.7 4 2"/></svg>',
        swap: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>',
        pen: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
        shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.7 9a.6.6 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/></svg>',
        yen: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18"/><path d="M6 6.5 12 13l6-6.5"/><path d="M6.5 12.5h11"/><path d="M6.5 16h11"/></svg>',
        link: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
        ext: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',
        warn: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
        play: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5Z"/></svg>',
        arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'
      };

      function esc(s) {
        return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      }
      function sectionById(id) {
        for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].id === id) return SECTIONS[i];
        return null;
      }
      function guideById(id) {
        for (var i = 0; i < GUIDES.length; i++) if (GUIDES[i].id === id) return GUIDES[i];
        return null;
      }
      function guidesIn(sectionId) {
        return GUIDES.filter(function (g) { return g.section === sectionId; });
      }

      /* ---- static text (data-i18n) ---- */
      function applyStatic() {
        var t = STR[lang];
        document.documentElement.lang = lang === "hi" ? "hi" : "en";
        var nodes = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < nodes.length; i++) {
          var key = nodes[i].getAttribute("data-i18n");
          if (t[key] != null) nodes[i].textContent = t[key];
        }
        var htmlNodes = document.querySelectorAll("[data-i18n-html]");
        for (var j = 0; j < htmlNodes.length; j++) {
          var hk = htmlNodes[j].getAttribute("data-i18n-html");
          if (t[hk] != null) htmlNodes[j].innerHTML = t[hk];
        }
        document.getElementById("searchInput").setAttribute("placeholder", t.searchPh);
        document.getElementById("heroSearchInput").setAttribute("placeholder", t.heroSearchPh);
        document.getElementById("langEn").setAttribute("aria-pressed", lang === "en" ? "true" : "false");
        document.getElementById("langHi").setAttribute("aria-pressed", lang === "hi" ? "true" : "false");
      }

      /* ---- home: sections ---- */
      var SECTION_MEDIA = {
        visas: { type: "img", src: "images/section-visas-kibitsu-shrine.jpg", alt: "Kibitsu Shrine in Okayama, with its famous double-gabled shrine hall under a clear blue sky" },
        exams: { type: "img", src: "images/section-exams-korakuen.jpg", alt: "Korakuen Garden in Okayama, its pond and lawns with the black keep of Okayama Castle behind the trees" },
        help: { type: "graphic", cls: "red", big: "110 · 119" },
        money: { type: "img", src: "images/section-money-kurashiki.jpg", alt: "The canal of the Kurashiki Bikan Quarter in Okayama, willow trees and white-walled old storehouses reflected in the water" },
        links: { type: "img", src: "images/section-links-okayama-castle.jpg", alt: "Okayama Castle seen across the Korakuen garden pond" }
      };
      function renderSections() {
        var t = STR[lang];
        var html = "";
        SECTIONS.forEach(function (s, i) {
          var count = guidesIn(s.id).length;
          var countText;
          if (s.id === "links") countText = LINKS.length + " " + (lang === "hi" ? "लिंक" : "links");
          else if (count === 0) countText = lang === "hi" ? "गाइड जल्द आ रही है" : "Guide coming soon";
          else countText = count + " " + (count === 1 ? t.guideWord : t.guidesWord);
          var m = SECTION_MEDIA[s.id];
          var media;
          if (m && m.type === "img") {
            media = '<span class="sec-media"><span class="sec-num">0' + (i + 1) + '</span><img src="' + m.src + '" alt="' + esc(m.alt) + '" loading="lazy" /></span>';
          } else if (m && m.type === "graphic") {
            var small = s.id === "help" ? t.emgTitle : (lang === "hi" ? "न्यूनतम वेतन · जापान" : "Minimum wage · Japan");
            media = '<span class="sec-media graphic ' + m.cls + '"><span><span class="gm-big">' + m.big + '</span><span class="gm-small" style="display:block">' + esc(small) + '</span></span></span>';
          } else {
            media = '<span class="sec-media graphic clay"><span class="gm-big">0' + (i + 1) + '</span></span>';
          }
          html += '<button type="button" class="sec-card' + (s.id === "links" ? " wide" : "") + '" data-section="' + s.id + '">'
            + media
            + '<span class="sec-body"><h3>' + esc(s[lang].name) + '</h3>'
            + '<p>' + esc(s[lang].desc) + '</p>'
            + '<span class="sec-foot"><span class="sec-count">' + esc(countText) + '</span><span class="sec-arrow" aria-hidden="true">\u2192</span></span></span>'
            + '</button>';
        });
        document.getElementById("secGrid").innerHTML = html;
        var cards = document.querySelectorAll(".sec-card");
        for (var i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", function () {
            var sid = this.getAttribute("data-section");
            if (sid === "links") {
              document.getElementById("links").scrollIntoView({ behavior: "smooth" });
            } else {
              setFilter(sid);
              document.getElementById("guides").scrollIntoView({ behavior: "smooth" });
            }
          });
        }
      }

      /* ---- home: filter chips ---- */
      function renderChips() {
        var t = STR[lang];
        var html = '<button type="button" class="chip" data-chip="all" aria-pressed="' + (activeSection === "all") + '">' + esc(t.allTopics) + '</button>';
        SECTIONS.forEach(function (s) {
          if (s.id === "links") return;
          html += '<button type="button" class="chip" data-chip="' + s.id + '" aria-pressed="' + (activeSection === s.id) + '">' + esc(s[lang].name) + '</button>';
        });
        var row = document.getElementById("chipRow");
        row.innerHTML = html;
        var chips = row.querySelectorAll(".chip");
        for (var i = 0; i < chips.length; i++) {
          chips[i].addEventListener("click", function () { setFilter(this.getAttribute("data-chip")); });
        }
      }
      function setFilter(sid) {
        activeSection = sid;
        renderChips();
        renderGuides();
      }

      /* ---- home: guide cards ---- */
      function renderGuides() {
        var t = STR[lang];
        var q = document.getElementById("searchInput").value.trim().toLowerCase();
        var list = GUIDES.filter(function (g) {
          if (activeSection !== "all" && g.section !== activeSection) return false;
          if (!q) return true;
          var en = g.en, hi = g.hi;
          var hay = (en.title + " " + en.simple + " " + hi.title + " " + hi.simple + " " + (g.keywords || "")).toLowerCase();
          return hay.indexOf(q) !== -1;
        });
        var html = "";
        var courseHit = activeSection === "all" && courseMatches(q);
        if (courseHit) {
          html += '<button type="button" class="guide-card course-hit" data-course-card="1">'
            + '<span class="g-top"><span class="g-idx">30</span><span class="g-tag">' + esc(t.courseTag) + '</span></span>'
            + '<h3>' + esc(t.courseTitle) + '</h3>'
            + '<p>' + esc(t.courseLede) + '</p>'
            + '<span class="g-open">' + esc(t.courseCtaChart) + ' ' + ICONS.arrow + '</span>'
            + '</button>';
        }
        list.forEach(function (g) {
          var sec = sectionById(g.section);
          var num = GUIDES.indexOf(g) + 1;
          var numText = (num < 10 ? "0" : "") + num;
          html += '<button type="button" class="guide-card" data-guide="' + g.id + '">'
            + '<span class="g-top"><span class="g-idx">' + numText + '</span><span class="g-tag">' + esc(sec[lang].name) + '</span></span>'
            + '<h3>' + esc(g[lang].title) + '</h3>'
            + '<p>' + esc(g[lang].simple) + '</p>'
            + '<span class="g-open">' + esc(t.openGuide) + ' ' + ICONS.arrow + '</span>'
            + '</button>';
        });
        document.getElementById("guideGrid").innerHTML = html;
        var nr = document.getElementById("noResults");
        if (list.length === 0 && !courseHit) {
          nr.hidden = false; nr.textContent = t.noResults;
        } else { nr.hidden = true; }
        var cc = document.querySelectorAll("[data-course-card]");
        for (var k = 0; k < cc.length; k++) {
          cc[k].addEventListener("click", function () { location.hash = "#/course"; });
        }
        var cards = document.querySelectorAll(".guide-card[data-guide]");
        for (var i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", function () {
            location.hash = "#/guide/" + this.getAttribute("data-guide");
          });
        }
      }

      /* ---- home: official links ---- */
      function renderLinks() {
        var html = "";
        LINKS.forEach(function (l) {
          html += '<a class="link-card" href="' + l.url + '" target="_blank" rel="noopener">'
            + '<span><h3>' + esc(l.label) + '</h3>'
            + '<span class="lk-url">' + esc(l.host) + '</span>'
            + '<p>' + esc(l[lang]) + '</p></span>'
            + '<span class="lk-arrow" aria-hidden="true">\u2197</span></a>';
        });
        document.getElementById("linkList").innerHTML = html;
      }

      /* ---- hero search ---- */
      var SECTION_KEYWORDS = {
        visas: "visa ssw titp ikusei shuro kaigo welding \u0935\u0940\u091c\u093c\u093e \u0935\u0940\u091c\u093e",
        exams: "exam test prometric jft japanese \u092a\u0930\u0940\u0915\u094d\u0937\u093e \u091f\u0947\u0938\u094d\u091f \u091c\u093e\u092a\u093e\u0928\u0940",
        help: "emergency problem report police help 110 119 \u0907\u092e\u0930\u091c\u0947\u0902\u0938\u0940 \u092e\u0926\u0926 \u092a\u0930\u0947\u0936\u093e\u0928\u0940 \u092a\u0941\u0932\u093f\u0938",
        money: "money salary wage pension tax payslip yen \u092a\u0948\u0938\u093e \u0935\u0947\u0924\u0928 \u092a\u0947\u0902\u0936\u0928 \u091f\u0948\u0915\u094d\u0938",
        links: "official links government portal \u0938\u0930\u0915\u093e\u0930\u0940 \u0932\u093f\u0902\u0915 \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915"
      };
      function courseHaystack() {
        var titles = "";
        COURSE_WEEKS.forEach(function (w) {
          titles += " " + w.en.name + " " + w.hi.name;
          w.days.forEach(function (d) { titles += " " + d.en.title + " " + d.en.detail + " " + d.hi.title + " " + d.hi.detail; });
        });
        return (STR.en.courseTitle + " " + STR.hi.courseTitle + " " + COURSE_ALIASES + titles).toLowerCase();
      }
      function courseMatches(q) {
        q = (q || "").trim().toLowerCase();
        if (!q) return false;
        if (courseHaystack().indexOf(q) !== -1) return true;
        var words = q.split(/\s+/);
        for (var i = 0; i < words.length; i++) {
          if (words[i].length > 2 && COURSE_ALIASES.indexOf(words[i]) !== -1) return true;
        }
        return false;
      }
      function guideHaystack(g) {
        var sec = sectionById(g.section);
        return (g.en.title + " " + g.en.simple + " " + g.hi.title + " " + g.hi.simple + " " + (g.keywords || "") + " " + (sec ? sec.en.name + " " + sec.hi.name : "")).toLowerCase();
      }
      function heroMatches(q) {
        q = q.trim().toLowerCase();
        if (!q) return { guides: [], sections: [], course: false };
        var gs = GUIDES.filter(function (g) { return guideHaystack(g).indexOf(q) !== -1; });
        var ss = SECTIONS.filter(function (s) {
          var hay = (s.en.name + " " + s.en.desc + " " + s.hi.name + " " + s.hi.desc + " " + (SECTION_KEYWORDS[s.id] || "")).toLowerCase();
          return hay.indexOf(q) !== -1;
        });
        return { guides: gs, sections: ss, course: courseMatches(q) };
      }
      function renderHeroResults() {
        var t = STR[lang];
        var input = document.getElementById("heroSearchInput");
        var box = document.getElementById("heroResults");
        if (!input || !box) return;
        var q = input.value.trim();
        if (!q) { box.hidden = true; box.innerHTML = ""; return; }
        var m = heroMatches(q);
        var html = "";
        if (m.course) {
          html += '<button type="button" class="hero-result" data-hero-course="1"><span class="hr-main"><span class="hr-tag">' + esc(t.courseTag) + '</span><span class="hr-title">' + esc(t.courseTitle) + '</span></span><span class="hr-arrow" aria-hidden="true">\u2192</span></button>';
        }
        m.guides.slice(0, 6).forEach(function (g) {
          var sec = sectionById(g.section);
          html += '<button type="button" class="hero-result" data-hero-guide="' + g.id + '"><span class="hr-main"><span class="hr-tag">' + esc(sec[lang].name) + '</span><span class="hr-title">' + esc(g[lang].title) + '</span></span><span class="hr-arrow" aria-hidden="true">\u2192</span></button>';
        });
        m.sections.forEach(function (s) {
          var covered = false;
          m.guides.forEach(function (g) { if (g.section === s.id) covered = true; });
          if (covered) return;
          html += '<button type="button" class="hero-result" data-hero-section="' + s.id + '"><span class="hr-main"><span class="hr-tag">' + esc(t.heroTopicWord) + '</span><span class="hr-title">' + esc(s[lang].name) + '</span></span><span class="hr-arrow" aria-hidden="true">\u2192</span></button>';
        });
        if (!html) {
          html = '<div class="hero-noresult">' + esc(t.heroNoResults) + ' <a href="' + IG_URL + '" target="_blank" rel="noopener">' + esc(t.aboutBtn) + '</a></div>';
        }
        box.innerHTML = html;
        box.hidden = false;
        var cb = box.querySelectorAll("[data-hero-course]");
        for (var c = 0; c < cb.length; c++) {
          cb[c].addEventListener("click", function () {
            box.hidden = true;
            location.hash = "#/course";
          });
        }
        var gb = box.querySelectorAll("[data-hero-guide]");
        for (var i = 0; i < gb.length; i++) {
          gb[i].addEventListener("click", function () {
            box.hidden = true;
            location.hash = "#/guide/" + this.getAttribute("data-hero-guide");
          });
        }
        var sb = box.querySelectorAll("[data-hero-section]");
        for (var j = 0; j < sb.length; j++) {
          sb[j].addEventListener("click", function () {
            box.hidden = true;
            var sid = this.getAttribute("data-hero-section");
            if (sid === "links") { document.getElementById("links").scrollIntoView({ behavior: "smooth" }); }
            else { setFilter(sid); document.getElementById("guides").scrollIntoView({ behavior: "smooth" }); }
          });
        }
      }
      function onHeroSearch() {
        var v = document.getElementById("heroSearchInput").value;
        var gi = document.getElementById("searchInput");
        if (gi.value !== v) gi.value = v;
        if (activeSection !== "all") { activeSection = "all"; renderChips(); }
        renderGuides();
        renderHeroResults();
      }
      function heroGo() {
        var q = document.getElementById("heroSearchInput").value.trim();
        if (!q) { document.getElementById("guides").scrollIntoView({ behavior: "smooth" }); return; }
        var m = heroMatches(q);
        var courseFirst = m.course && (COURSE_ALIASES.indexOf(q) !== -1 || q.indexOf("try japan") !== -1 || q.indexOf("30 din") !== -1);
        if (courseFirst) {
          document.getElementById("heroResults").hidden = true;
          location.hash = "#/course";
        } else if (m.guides.length) {
          document.getElementById("heroResults").hidden = true;
          location.hash = "#/guide/" + m.guides[0].id;
        } else if (m.course) {
          document.getElementById("heroResults").hidden = true;
          location.hash = "#/course";
        } else {
          renderHeroResults();
          document.getElementById("guides").scrollIntoView({ behavior: "smooth" });
        }
      }

      /* ---- guide detail ---- */
      function renderGuide(g) {
        var t = STR[lang];
        var c = g[lang];
        var sec = sectionById(g.section);
        var idx = GUIDES.indexOf(g);
        var prev = idx > 0 ? GUIDES[idx - 1] : null;
        var next = idx < GUIDES.length - 1 ? GUIDES[idx + 1] : null;
        var steps = c.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
        var traps = c.traps.map(function (s) { return "<li>" + ICONS.warn + esc(s) + "</li>"; }).join("");
        var html = '<span class="g-tag">' + esc(sec[lang].name) + '</span>'
          + '<h1>' + esc(c.title) + '</h1>'
          + '<div class="simple-box"><div class="sb-label">' + esc(t.simpleAnswer) + '</div><p>' + esc(c.simple) + '</p></div>'
          + '<h2 class="sec-h">' + esc(t.stepByStep) + '</h2><ol class="steps">' + steps + '</ol>'
          + '<h2 class="sec-h">' + esc(t.trapsTitle) + '</h2><ul class="traps">' + traps + '</ul>'
          + '<div class="reel-card"><span class="reel-play">' + ICONS.play + '</span>'
          + '<div><h3>' + esc(t.reelTitle) + '</h3><p>' + esc(t.reelText) + '</p></div>'
          + '<a class="btn" href="' + IG_URL + '" target="_blank" rel="noopener">' + esc(t.reelBtn) + '</a></div>'
          + '<div class="source-box"><span class="src-label">' + esc(t.sourceLabel) + '</span>'
          + '<a href="' + g.source.url + '" target="_blank" rel="noopener">' + esc(g.source.label) + '</a>'
          + '<span class="checked">' + esc(t.checked) + '</span></div>'
          + '<p class="disclaimer">' + esc(t.disclaimer) + '</p>'
          + '<div class="prev-next">'
          + (prev ? '<button type="button" data-nav="' + prev.id + '"><span>' + esc(t.prevGuide) + '</span>' + esc(prev[lang].title) + '</button>' : '<span style="flex:1"></span>')
          + (next ? '<button type="button" class="next" data-nav="' + next.id + '"><span>' + esc(t.nextGuide) + '</span>' + esc(next[lang].title) + '</button>' : '<span style="flex:1"></span>')
          + '</div>';
        document.getElementById("guideBody").innerHTML = html;
        var navBtns = document.querySelectorAll("[data-nav]");
        for (var i = 0; i < navBtns.length; i++) {
          navBtns[i].addEventListener("click", function () {
            location.hash = "#/guide/" + this.getAttribute("data-nav");
          });
        }
      }

      /* ---- course detail ---- */
      function renderCourse() {
        var t = STR[lang];
        var weeks = "";
        COURSE_WEEKS.forEach(function (w) {
          var rows = "";
          w.days.forEach(function (d) {
            var c = d[lang];
            var date = lang === "hi" ? d.dateHi : d.dateEn;
            rows += '<div class="day-row">'
              + '<span class="day-num">' + (d.n < 10 ? "0" : "") + d.n + '</span>'
              + '<span class="day-main"><span class="day-title">' + esc(c.title) + '</span>'
              + '<span class="day-detail" style="display:block">' + esc(c.detail) + '</span></span>'
              + '<span class="day-side"><span class="day-date">' + esc(date) + '</span>'
              + '<span class="day-pending">' + esc(t.coursePending) + '</span></span>'
              + '</div>';
          });
          weeks += '<div class="week-block"><div class="week-head"><h3>' + esc(w[lang].name) + '</h3>'
            + '<span class="week-dates">' + esc(w[lang].dates) + '</span></div>' + rows + '</div>';
        });
        var html = '<span class="g-tag">' + esc(t.courseTag) + '</span>'
          + '<h1>' + esc(t.courseTitle) + '</h1>'
          + '<p class="course-lede">' + esc(t.courseLede) + '</p>'
          + '<div class="simple-box"><div class="sb-label">' + esc(t.simpleAnswer) + '</div><p>' + esc(t.coursePromise) + '</p></div>'
          + '<div class="course-facts">'
          + '<div class="course-fact"><h3>' + esc(t.courseWhoTitle) + '</h3><p>' + esc(t.courseWho) + '</p></div>'
          + '<div class="course-fact"><h3>' + esc(t.courseHowTitle) + '</h3><p>' + esc(t.courseHow) + '</p></div>'
          + '</div>'
          + '<h2 class="sec-h" style="font-size:clamp(24px,4vw,34px);font-weight:900;text-transform:uppercase;letter-spacing:-0.01em;margin:38px 0 4px;">' + esc(t.courseChartTitle) + '</h2>'
          + weeks
          + '<div class="reel-card"><span class="reel-play">' + ICONS.play + '</span>'
          + '<div><h3>' + esc(t.courseFollowTitle) + '</h3><p>' + esc(t.courseFollowText) + '</p></div>'
          + '<a class="btn" href="' + IG_URL + '" target="_blank" rel="noopener">' + esc(t.courseFollowBtn) + '</a></div>';
        document.getElementById("courseBody").innerHTML = html;
      }

      /* ---- routing ---- */
      var currentGuide = null;
      var onCourse = false;
      function route() {
        var h = location.hash || "#/";
        var m = h.match(/^#\/guide\/(.+)$/);
        var home = document.getElementById("viewHome");
        var gv = document.getElementById("viewGuide");
        var cv = document.getElementById("viewCourse");
        var tb = document.getElementById("topbar");
        if (h === "#/course") {
          if (tb) tb.classList.add("solid");
          currentGuide = null; onCourse = true;
          renderCourse();
          home.hidden = true; gv.hidden = true; cv.hidden = false;
          window.scrollTo(0, 0);
        } else if (m && guideById(m[1])) {
          if (tb) tb.classList.add("solid");
          currentGuide = guideById(m[1]); onCourse = false;
          renderGuide(currentGuide);
          home.hidden = true; gv.hidden = false; cv.hidden = true;
          window.scrollTo(0, 0);
        } else {
          if (tb) tb.classList.remove("solid");
          currentGuide = null; onCourse = false;
          gv.hidden = true; cv.hidden = true; home.hidden = false;
        }
      }

      function renderAll() {
        applyStatic();
        renderSections();
        renderChips();
        renderGuides();
        renderLinks();
        renderHeroResults();
        if (currentGuide) renderGuide(currentGuide);
        if (onCourse) renderCourse();
      }

      document.getElementById("langEn").addEventListener("click", function () { if (lang !== "en") { lang = "en"; renderAll(); } });
      document.getElementById("langHi").addEventListener("click", function () { if (lang !== "hi") { lang = "hi"; renderAll(); } });
      document.getElementById("searchInput").addEventListener("input", function () {
        var hi = document.getElementById("heroSearchInput");
        if (hi.value !== this.value) hi.value = this.value;
        renderGuides();
      });
      document.getElementById("heroSearchInput").addEventListener("input", onHeroSearch);
      document.getElementById("heroSearchInput").addEventListener("focus", renderHeroResults);
      document.getElementById("heroSearchInput").addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); heroGo(); }
        if (e.key === "Escape") { document.getElementById("heroResults").hidden = true; }
      });
      document.getElementById("heroSearchGo").addEventListener("click", heroGo);
      document.addEventListener("click", function (e) {
        var hs = document.getElementById("heroSearch");
        if (hs && !hs.contains(e.target)) document.getElementById("heroResults").hidden = true;
      });
      document.getElementById("backBtn").addEventListener("click", function () { location.hash = "#/"; });
      document.getElementById("courseBackBtn").addEventListener("click", function () { location.hash = "#/"; });
      document.getElementById("courseOpenBtn").addEventListener("click", function () { location.hash = "#/course"; });
      document.getElementById("brandHome").addEventListener("click", function (e) {
        e.preventDefault(); location.hash = "#/"; window.scrollTo(0, 0);
      });
      window.addEventListener("hashchange", route);

      renderAll();
      route();
