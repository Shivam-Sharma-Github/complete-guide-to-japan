/* ============================================================
   data.js = ALL THE WORDS of your website  ★ EDIT THIS FILE ★
   Guide titles, answers, steps, course days - everything you read
   on the page is written HERE, in English (en) and Hindi (hi).

   ONLY 2 RULES:
   1. Change only the words inside the "quotes".
   2. Never delete commas , brackets [ ] or braces { }
   ============================================================ */
/* ================= CONTENT ================= */
      var IG_URL = "https://www.instagram.com/shivam_bhai_japan";

      var SECTIONS = [
        { id: "visas", icon: "passport",
          en: { name: "Visas", desc: "TITP, SSW-1, SSW-2, Ikusei Shuro and the Kaigo status - every door, explained simply." },
          hi: { name: "वीज़ा", desc: "TITP, SSW-1, SSW-2, Ikusei Shuro और Kaigo स्टेटस - हर दरवाज़ा, आसान भाषा में।" },
          ja: { name: "ビザ", desc: "TITP、SSW-1、SSW-2、育成就労（いくせいしゅうろう）と介護（かいご）の資格 - すべての道を簡単に説明します。" } },
        { id: "jobs", icon: "pen",
          en: { name: "Jobs & Interviews", desc: "Company Sach - what a real Japanese hiring company looks for, interview mistakes, and the apply-to-offer process." },
          hi: { name: "नौकरियाँ और इंटरव्यू", desc: "Company Sach - एक असली जापानी hiring कंपनी ने ख़ुद बताया: कंपनी क्या देखती है, इंटरव्यू की ग़लतियाँ और apply से offer तक का पूरा process।" },
          ja: { name: "仕事と面接（めんせつ）", desc: "Company Sach - 本当の日本の会社が見ること、面接のまちがい、申し込みからオファーまでの流れ。" } },
        { id: "exams", icon: "pen",
          en: { name: "Exams & Tests", desc: "Prometric booking, SSW skill tests and the JFT-Basic Japanese test." },
          hi: { name: "परीक्षाएँ", desc: "Prometric बुकिंग, SSW स्किल टेस्ट और JFT-Basic जापानी टेस्ट।" },
          ja: { name: "試験（しけん）", desc: "Prometricの予約（よやく）、SSWのスキル試験とJFT-Basicの日本語試験。" } },
        { id: "help", icon: "shield",
          en: { name: "Problem? Get Help", desc: "Where to report a problem, who helps you, and the emergency and help numbers - 110, 119, #9110 and 188." },
          hi: { name: "परेशानी? मदद लें", desc: "कहाँ रिपोर्ट करें, कौन मदद करता है, और इमरजेंसी व मदद वाले नंबर - 110, 119, #9110 और 188।" },
          ja: { name: "困（こま）ったとき・助（たす）け", desc: "どこに相談するか、誰が助けるか、緊急と助けの番号 - 110、119、#9110、188。" } },
        { id: "money", icon: "yen",
          en: { name: "Money & Life", desc: "Minimum wage, payslips and what your salary really means." },
          hi: { name: "पैसा और ज़िंदगी", desc: "न्यूनतम वेतन, पे-स्लिप और आपकी सैलरी का असली मतलब।" },
          ja: { name: "お金と生活（せいかつ）", desc: "最低賃金（さいていちんぎん）、給料明細（きゅうりょうめいさい）、あなたの給料の本当の意味。" } },
        { id: "links", icon: "link",
          en: { name: "Official Links", desc: "Every official government link in one place." },
          hi: { name: "आधिकारिक लिंक", desc: "सभी आधिकारिक सरकारी लिंक एक ही जगह।" },
          ja: { name: "公式リンク", desc: "政府（せいふ）の公式リンクを全部、1つの場所に。" } }
      ];

      var GUIDES = [
                {
          id: "all-visas-at-a-glance", section: "visas",
          keywords: "all visas japan visa types list titp ikusei shuro ssw engineer skilled labor business manager highly skilled transfer student kaigo working holiday saare visa सभी वीज़ा जापान वीज़ा प्रकार ビザ 種類 全部 一覧",
          sources: [ { label: "Immigration Services Agency (ISA) - moj.go.jp", url: "https://www.moj.go.jp/isa/" }, { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/" } ],
          reel: "https://www.instagram.com/p/Df3B0_3k5Mj/",
          en: {
            title: "All Japan Visas — At a Glance",
            simple: "Japan has many visas, and every visa has its own rule. Here is every main work and study visa on one page, in very simple words: what it is, who can go, how many years, and can your family join you? Read this first, then open the full guide of your visa.",
            steps: [
              "TITP (Technical Intern Training): the old training route. You come to learn work skills - it is training, not a direct job. From India, only through an official Sending Organisation; no direct apply. Maximum 5 years in total. Family cannot join. Changing company is almost impossible.",
              "Ikusei Shuro: the NEW system that will replace TITP, starting 1 April 2027. Usually 3 years, then the road to SSW opens. Family cannot join. India is NOT confirmed yet - anyone taking money in its name today is lying.",
              "SSW-1 (Specified Skilled Worker): a direct work visa. Pass your field's skill test + Japanese N4 or JFT-Basic. 16 fields - factory, food, building, care, farming and more. Maximum 5 years in total. Family cannot join. You CAN change company inside the same field, and no agent is needed.",
              "SSW-2: the level above SSW-1. Needs 2-3 years of SSW-1 work, the bigger SSW-2 test, and experience of teaching others. Only 11 fields. No total limit - it keeps renewing. Family CAN join. The long-stay and PR road opens from here. Kaigo has no SSW-2.",
              "Engineer Visa (Engineer / Specialist in Humanities / International Services): a direct company job for degree holders. The job must match your degree, or you need 10 years of experience (for IT, some special exams also count). It keeps renewing. Family can join. N2 is not a law - but companies ask for it.",
              "Skilled Labor: for special hands-on skills, like the chef of a big hotel. You need about 10 years of proven experience in a listed skill. No degree needed - your hands and experience are everything. It keeps renewing. Family can join.",
              "Business Manager: open your own company in Japan and live on it. Rules became very strict in 2025: at least ¥30 million capital, your own office, and 1 full-time staff. It keeps renewing. Family can join. Small money does not work for this visa now.",
              "Highly Skilled Professional: the points fast-track visa. Points for education, salary and experience - you need 70 points or more. One grant is 5 years. Family can join, with extra benefits. Fastest PR: at 80 points, you can apply for PR in just 1 year.",
              "Intra-Company Transfer: the same company moves you from its India office to its Japan office. You must have worked in the same company group for at least 1 year before. The visa is tied to that company - you cannot switch to another company.",
              "Student Visa: for study - a Japanese language school or a university. You need admission and your fees arranged. Up to 2 years at a time, by course. Family usually cannot join. Part-time work is only 28 hours a week. This is a study road - do not choose it for work.",
              "Kaigo Visa (Care Worker): the special visa for care workers who pass the Kaigo Fukushishi national exam. Before the exam: about 3 years of care work + about 450 hours of training. No 5-year stop - it keeps renewing. Family can join. The exam is in Japanese - hard, but this visa is stronger than SSW.",
              "Working Holiday: a travel-plus-work visa for young people of SOME countries. India is NOT on the list - an Indian passport cannot get this visa at all. Any agent who promises you a Working Holiday visa is lying.",
              "Which visa is for you? Degree hai - Engineer Visa. Skill test de sakte ho - SSW. Training se shuru karna hai - TITP / Ikusei Shuro. Padhai ke liye aana hai - Student Visa. Care ka kaam pasand hai - the Kaigo road."
            ],
            traps: [
              "Never pay a deposit and never sign a penalty paper - both are banned. If an agent asks for money, first check the official site yourself.",
              "Ikusei Shuro starts on 1 April 2027 and India is not confirmed for it. Taking money in its name today is fraud.",
              "There is no Working Holiday visa for India. Any agent selling it is lying - stay away."
            ]
          },
          hi: {
            title: "Japan के सारे वीज़ा — एक नज़र में",
            simple: "Japan के कई वीज़ा हैं, और हर वीज़ा का अपना नियम है। यहाँ हर मुख्य work और study वीज़ा एक ही page पर है, बिल्कुल आसान शब्दों में: ये है क्या, कौन जा सकता है, कितने साल मिलता है, और परिवार साथ आ सकता है या नहीं? पहले ये पढ़ें, फिर अपने वीज़ा की पूरी guide खोलें।",
            steps: [
              "TITP (Technical Intern Training): पुराना training वाला रास्ता। आप काम सीखने आते हैं — ये training है, सीधी नौकरी नहीं। India से सिर्फ़ official Sending Organisation के through; direct apply नहीं होता। कुल ज़्यादा से ज़्यादा 5 साल। परिवार साथ नहीं आ सकता। Company बदलना लगभग नामुमकिन है।",
              "Ikusei Shuro: TITP की जगह आने वाला NAYA system, 1 April 2027 से शुरू। आम तौर पर 3 साल, फिर SSW का रास्ता खुलता है। परिवार साथ नहीं आ सकता। India अभी confirm नहीं है — आज इसके नाम पर पैसा लेने वाला झूठ बोल रहा है।",
              "SSW-1 (Specified Skilled Worker): सीधा काम का वीज़ा। अपने field का skill test + Japanese N4 या JFT-Basic pass करें। 16 fields हैं — factory, खाना, building, care, खेती वग़ैरह। कुल ज़्यादा से ज़्यादा 5 साल। परिवार साथ नहीं आ सकता। उसी field में company बदल सकते हैं, और agent की ज़रूरत नहीं है।",
              "SSW-2: SSW-1 के ऊपर वाला level। SSW-1 में 2–3 साल काम, बड़ा SSW-2 test, और दूसरों को सिखाने का तजुर्बा चाहिए। सिर्फ़ 11 fields में है। कोई कुल limit नहीं — renew होता रहता है। परिवार साथ आ सकता है। लंबे समय रहने और PR का रास्ता यहीं से खुलता है। Kaigo में SSW-2 नहीं है।",
              "Engineer Visa (Engineer / Specialist in Humanities / International Services): degree वालों के लिए सीधी company नौकरी। काम आपकी degree से जुड़ा होना चाहिए, या 10 साल का तजुर्बा चाहिए (IT के लिए कुछ ख़ास exams भी चलते हैं)। Renew होता रहता है। परिवार साथ आ सकता है। N2 क़ानून नहीं है — पर companies माँगती हैं।",
              "Skilled Labor: ख़ास हाथ के हुनर वालों के लिए, जैसे बड़े hotel के chef। List वाले हुनर में लगभग 10 साल का साबित तजुर्बा चाहिए। Degree नहीं चाहिए — हाथ और तजुर्बा ही सब कुछ है। Renew होता रहता है। परिवार साथ आ सकता है।",
              "Business Manager: Japan में अपनी company खोलकर रहने का वीज़ा। 2025 से नियम बहुत सख़्त हैं: कम से कम ¥30 million पूँजी, अपना office, और 1 full-time staff चाहिए। Renew होता रहता है। परिवार साथ आ सकता है। अब छोटे पैसे से ये वीज़ा नहीं होता।",
              "Highly Skilled Professional: points वाला fast-track वीज़ा। पढ़ाई, salary और तजुर्बे पर points — 70 points या ज़्यादा चाहिए। एक बार में 5 साल का वीज़ा मिलता है। परिवार साथ आ सकता है, कुछ ख़ास सुविधाओं के साथ। PR सबसे जल्दी: 80 points पर सिर्फ़ 1 साल में PR apply कर सकते हैं।",
              "Intra-Company Transfer: वही company आपको India office से Japan office भेजती है। पहले उसी company group में कम से कम 1 साल काम किया होना चाहिए। वीज़ा उसी company से बँधा होता है — दूसरी company में बदल नहीं सकते।",
              "Student Visa: पढ़ाई के लिए — Japanese language school या university। Admission और fees का इंतज़ाम होना चाहिए। Course के हिसाब से एक बार में 2 साल तक। परिवार आम तौर पर साथ नहीं आ सकता। Part-time काम सिर्फ़ 28 घंटे/हफ़्ता। ये पढ़ाई का रास्ता है — काम के लिए इसे मत चुनें।",
              "Kaigo Visa (Care Worker): उन care workers का ख़ास वीज़ा जो Kaigo Fukushishi का national exam pass करते हैं। Exam से पहले: लगभग 3 साल care का काम + लगभग 450 घंटे की training। 5 साल वाली रोक नहीं — renew होता रहता है। परिवार साथ आ सकता है। Exam Japanese में होता है — मुश्किल है, पर ये वीज़ा SSW से मज़बूत है।",
              "Working Holiday: कुछ देशों के नौजवानों के लिए घूमते हुए काम करने का वीज़ा। India इस list में नहीं है — Indian passport पर ये वीज़ा मिल ही नहीं सकता। जो agent Working Holiday दिलाने की बात करे, वो झूठ बोल रहा है।",
              "आपके लिए कौन-सा वीज़ा? Degree है — Engineer Visa। Skill test दे सकते हो — SSW। Training से शुरू करना है — TITP / Ikusei Shuro। पढ़ाई के लिए आना है — Student Visa। Care का काम पसंद है — Kaigo का रास्ता।"
            ],
            traps: [
              "Deposit कभी न दें और penalty वाला paper कभी sign न करें — दोनों banned हैं। Agent पैसा माँगे तो पहले official site पर ख़ुद check करें।",
              "Ikusei Shuro 1 April 2027 से शुरू होगा और India उसके लिए confirm नहीं है। आज इसके नाम पर पैसा लेना fraud है।",
              "India के लिए Working Holiday वीज़ा है ही नहीं। इसे बेचने वाला agent झूठ बोल रहा है — दूर रहें।"
            ]
          },
          ja: {
            title: "日本のビザ全部 — 一目で分かる",
            simple: "日本にはたくさんのビザがあります。ビザごとにルールがちがいます。ここに主な仕事と勉強のビザを全部、1つのページに書きました。とても簡単な言葉です: これは何か、誰が行けるか、何年もらえるか、家族を連れて来られるか。まずこれを読んで、それからあなたのビザの詳しいガイドを開いてください。",
            steps: [
              "TITP（技能実習）: 古い研修の道です。仕事を学ぶために来ます。研修です。直接の仕事ではありません。インドからは、公式の送出機関を通るだけです。直接の申し込みはありません。全部で最長5年です。家族は来られません。会社の変更はほとんどできません。",
              "育成就労: TITPの代わりの新しい制度です。2027年4月1日に始まります。普通は3年です。それからSSWへの道が開きます。家族は来られません。インドはまだ確定していません。今日この名前でお金を取る人は嘘をついています。",
              "SSW-1（特定技能1号）: 直接の仕事のビザです。あなたの分野の技能試験と、日本語N4かJFT-Basicに合格してください。16の分野があります。工場、食品、建設、介護、農業などです。全部で最長5年です。家族は来られません。同じ分野の中で会社を変えられます。エージェントは必要ありません。",
              "SSW-2: SSW-1の上のレベルです。SSW-1で2-3年の仕事、大きいSSW-2試験、人に教える経験が必要です。11の分野だけです。合計の制限はありません。更新が続きます。家族が来られます。長く住む道と永住の道はここから開きます。介護にSSW-2はありません。",
              "エンジニアビザ（技術・人文知識・国際業務）: 学位がある人のための、直接の会社の仕事です。仕事はあなたの学位と合わなければなりません。または10年の経験が必要です（ITは特別な試験も使えます）。更新が続きます。家族が来られます。N2は法律ではありませんが、会社が求めます。",
              "技能: 特別な手の技能のためのビザです。例えば大きいホテルのシェフです。リストの技能で約10年の証明できる経験が必要です。学位は必要ありません。手と経験が全部です。更新が続きます。家族が来られます。",
              "経営・管理: 日本で自分の会社を開いて住むビザです。2025年からルールがとても厳しくなりました: 最低3,000万円の資本金、自分の事務所、フルタイムのスタッフ1人が必要です。更新が続きます。家族が来られます。今は小さいお金ではできません。",
              "高度専門職: ポイントの早いビザです。学歴、給料、経験でポイントがもらえます。70ポイント以上が必要です。1回で5年のビザがもらえます。家族が来られます。特別な利点もあります。永住がいちばん早いです: 80ポイントで、たった1年で永住を申請できます。",
              "企業内転勤: 同じ会社が、インドの事務所から日本の事務所へあなたを移します。前に同じ会社グループで最低1年働いていなければなりません。ビザはその会社と結びついています。他の会社に変えられません。",
              "留学: 勉強のためのビザです。日本語学校か大学です。入学と学費の準備が必要です。コースにより、1回で最長2年です。家族は普通来られません。アルバイトは週に28時間だけです。これは勉強の道です。仕事のために選ばないでください。",
              "介護ビザ: 介護福祉士の国家試験に合格した介護の人のための特別なビザです。試験の前: 約3年の介護の仕事と、約450時間の研修です。5年の停止はありません。更新が続きます。家族が来られます。試験は日本語です。難しいですが、このビザはSSWより強いです。",
              "ワーキングホリデー: いくつかの国の若い人のための、旅行と仕事のビザです。インドはリストにありません。インドのパスポートではこのビザは絶対にもらえません。ワーキングホリデーを約束するエージェントは嘘をついています。",
              "あなたにはどのビザ？学位があります — エンジニアビザ。技能試験を受けられます — SSW。研修から始めたい — TITP / 育成就労。勉強のために来たい — 留学ビザ。介護の仕事が好きです — 介護の道。"
            ],
            traps: [
              "デポジットを絶対に払わないでください。罰金の紙に絶対にサインしないでください。どちらも禁止です。エージェントがお金を求めたら、まず公式サイトで自分で確認してください。",
              "育成就労は2027年4月1日に始まります。インドは確定していません。今日その名前でお金を取ることは詐欺です。",
              "インドのためのワーキングホリデービザはありません。それを売るエージェントは嘘をついています。離れてください。"
            ]
          }
        },
{
          id: "ssw-titp-visas", section: "visas",
          keywords: "visa visas ssw titp work route training trainee skilled worker welding shipbuilding वीज़ा वीजा वर्क रूट ट्रेनिंग प्रशिक्षु नौकरी काम ビザ 特定技能 技能実習 働く 道",
          sources: [ { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/en/" }, { label: "Immigration Services Agency (ISA) - moj.go.jp", url: "https://www.moj.go.jp/isa/" }, { label: "OTIT - otit.go.jp", url: "https://www.otit.go.jp/" } ],
          reel: "https://www.instagram.com/reel/De4bClJTi5p/",
          en: {
            title: "SSW & TITP Visas - The Two Main Work Routes",
            simple: "Two main doors bring Indian workers to Japan. TITP is a training programme - you come to learn skills while you work. SSW is a work status - you pass a skill test and a Japanese test, then work in a set job field. Both are real government routes; which door fits you depends on your skills and your Japanese.",
            steps: [
              "Decide your route: little experience and you want training → TITP. You already have skills and some Japanese → SSW.",
              "For SSW: pass the skill test for your field and a Japanese language test (like JFT-Basic).",
              "Find a company in Japan that hires SSW workers in your field.",
              "The company, or its registered support organisation, helps with your application and your support plan.",
              "Come to Japan, start work, and follow the rules of your status."
            ],
            traps: [
              "Anyone asking for a big fee to “buy” you a visa - stop. Check the official portal first.",
              "TITP is training, not a free job-change visa - you cannot simply switch to another company.",
              "On SSW you can change jobs only inside the same field."
            ]
          },
          hi: {
            title: "SSW और TITP वीज़ा - काम के दो मुख्य रास्ते",
            simple: "भारतीय वर्करों को जापान लाने वाले दो मुख्य दरवाज़े हैं। TITP एक ट्रेनिंग प्रोग्राम है - आप काम करते हुए स्किल सीखने आते हैं। SSW एक वर्क स्टेटस है - आप स्किल टेस्ट और जापानी टेस्ट पास करके एक तय क्षेत्र में काम करते हैं। दोनों असली सरकारी रास्ते हैं; कौन-सा दरवाज़ा आपके लिए है, यह आपकी स्किल और आपकी जापानी पर निर्भर करता है।",
            steps: [
              "अपना रास्ता चुनें: अनुभव कम है और ट्रेनिंग चाहिए → TITP। स्किल पहले से है और थोड़ी जापानी आती है → SSW।",
              "SSW के लिए: अपने क्षेत्र का स्किल टेस्ट और जापानी भाषा का टेस्ट (जैसे JFT-Basic) पास करें।",
              "जापान की कोई कंपनी ढूँढें जो आपके क्षेत्र में SSW वर्कर रखती हो।",
              "कंपनी, या उसकी रजिस्टर्ड सपोर्ट संस्था, आपके आवेदन और सपोर्ट प्लान में मदद करती है।",
              "जापान आएँ, काम शुरू करें और अपने स्टेटस के नियमों का पालन करें।"
            ],
            traps: [
              "कोई वीज़ा “खरीदने” के लिए बड़ी फीस माँगे - रुक जाएँ। पहले आधिकारिक पोर्टल देखें।",
              "TITP ट्रेनिंग है, मनमर्ज़ी से नौकरी बदलने वाला वीज़ा नहीं - आप आसानी से दूसरी कंपनी में नहीं जा सकते।",
              "SSW पर नौकरी सिर्फ़ उसी क्षेत्र के अंदर बदली जा सकती है।"
            ]
          },
          ja: {
            title: "SSWとTITPのビザ - 働くための2つの大きな道",
            simple: "インドの人が日本で働くための大きなドアは2つあります。TITPは訓練（くんれん）のプログラムです。働きながら技術（ぎじゅつ）を学びます。SSWは働くための資格です。スキルの試験と日本語の試験に合格（ごうかく）して、決まった仕事の分野（ぶんや）で働きます。どちらも本当の政府の道です。どちらのドアが合うかは、あなたのスキルと日本語で決まります。",
            steps: [
              "道を決めてください: 経験（けいけん）が少なくて訓練を受けたい → TITP。もうスキルと少しの日本語がある → SSW。",
              "SSWのため: あなたの分野のスキル試験と、日本語の試験（JFT-Basicなど）に合格してください。",
              "あなたの分野でSSWの人を雇（やと）う日本の会社を見つけてください。",
              "会社、または登録支援機関（とうろくしえんきかん）が、あなたの申請（しんせい）と支援計画（しえんけいかく）を手伝います。",
              "日本に来て、仕事を始めて、あなたの資格のルールを守ってください。"
            ],
            traps: [
              "ビザを「買う」ために大きいお金を要求（ようきゅう）する人 - 止めてください。まず公式ポータルを確認してください。",
              "TITPは訓練です。自由に仕事を変えるビザではありません。簡単に他の会社に移（うつ）ることはできません。",
              "SSWでは、同じ分野の中でだけ仕事を変えることができます。"
            ]
          }
        },
        {
          id: "report-a-problem", section: "help",
          keywords: "problem report help otit labour office complaint unpaid salary overtime trouble परेशानी समस्या रिपोर्ट मदद शिकायत वेतन नहीं मिला ओवरटाइम 報告 相談 給料 残業 OTIT 労働基準監督署 助け",
          sources: [ { label: "OTIT - otit.go.jp", url: "https://www.otit.go.jp/" }, { label: "Ministry of Health, Labour and Welfare - mhlw.go.jp", url: "https://www.mhlw.go.jp/" } ],
          reel: "https://www.instagram.com/reel/De615GpB7dL/",
          en: {
            title: "Where to Report a Problem",
            simple: "If something is wrong at work - salary not paid, endless overtime, bad treatment - do not suffer silently. Official places exist to help foreign workers, on TITP and on SSW. Talking to them is free, and what you say stays confidential.",
            steps: [
              "On TITP? Contact OTIT (Organization for Technical Intern Training) - they protect trainees and take consultations.",
              "Any worker can go to the nearest Labour Standards Inspection Office for unpaid salary and work-rule problems.",
              "FRESC (Foreign Residents Support Center) gives free consultation and connects you to the right office.",
              "In danger right now? Call the police on 110.",
              "Keep proof: photos of your payslips, contract and work schedule make your case strong."
            ],
            traps: [
              "Suffering silently helps no one - consultation is free and confidential.",
              "Never sign a paper you do not understand. Ask for an interpreter first.",
              "Threats like “ask questions and we send you home” are not okay - report them."
            ]
          },
          hi: {
            title: "परेशानी हो तो कहाँ रिपोर्ट करें",
            simple: "अगर काम पर कुछ गलत हो रहा है - वेतन नहीं मिला, खत्म न होने वाला ओवरटाइम, बुरा व्यवहार - तो चुपचाप न सहें। TITP और SSW, दोनों पर विदेशी वर्करों की मदद के लिए आधिकारिक जगहें हैं। वहाँ बात करना मुफ़्त है, और आपकी बात गोपनीय रहती है।",
            steps: [
              "TITP पर हैं? OTIT (तकनीकी प्रशिक्षु ट्रेनिंग संस्था) से संपर्क करें - वे ट्रेनियों की रक्षा करते हैं और सलाह लेते हैं।",
              "कोई भी वर्कर वेतन न मिलने और काम के नियमों की समस्या के लिए नज़दीकी श्रम मानक निरीक्षण कार्यालय जा सकता है।",
              "FRESC (विदेशी निवासी सहायता केंद्र) मुफ़्त सलाह देता है और आपको सही दफ़्तर से जोड़ता है।",
              "अभी खतरा है? पुलिस को 110 पर कॉल करें।",
              "सबूत रखें: पे-स्लिप, कॉन्ट्रैक्ट और काम के शेड्यूल की फोटो आपके केस को मज़बूत बनाती है।"
            ],
            traps: [
              "चुपचाप सहने से किसी का भला नहीं होता - सलाह मुफ़्त और गोपनीय है।",
              "जो कागज़ समझ न आए, उस पर कभी साइन न करें। पहले दुभाषिया माँगें।",
              "“सवाल पूछा तो घर भेज देंगे” जैसी धमकी ठीक नहीं है - इसकी रिपोर्ट करें।"
            ]
          },
          ja: {
            title: "問題をどこに報告するか",
            simple: "仕事で何かまちがっているとき - 給料が払われない、残業（ざんぎょう）が終わらない、悪い扱（あつか）い - 静かに苦しまないでください。外国人の働く人を助ける公式の場所があります。TITPでもSSWでも。相談は無料で、あなたの話は秘密（ひみつ）です。",
            steps: [
              "TITPですか？ OTIT（外国人技能実習機構（がいこくじんぎのうじっしゅうきこう））に連絡してください。実習生を守って、相談を受けます。",
              "どの働く人も、給料が払われない問題や仕事のルールの問題で、近くの労働基準監督署（ろうどうきじゅんかんとくしょ）に行けます。",
              "FRESC（外国人在留支援（がいこくじんざいりゅうしえん）センター）は無料の相談をして、正しい窓口につなげます。",
              "今、危ないですか？ 警察110に電話してください。",
              "証拠（しょうこ）を残してください: 給料明細、契約、仕事のスケジュールの写真が、あなたの話を強くします。"
            ],
            traps: [
              "静かに苦しむことは誰も助けません。相談は無料で秘密です。",
              "分からない紙に絶対にサインしないでください。まず通訳（つうやく）を頼んでください。",
              "「質問したら国に帰す」という脅（おど）しはダメです。報告してください。"
            ]
          }
        },
        {
          id: "emergency-contacts", section: "help",
          keywords: "emergency police ambulance fire 110 119 118 coast guard danger accident help number phone 188 9110 consumer centre center shohi seikatsu shopping fraud scam contract non emergency police consultation इमरजेंसी आपातकाल पुलिस एम्बुलेंस आग खतरा दुर्घटना नंबर फोन उपभोक्ता केंद्र खरीदारी धोखाधड़ी फ्रॉड सलाह गैर इमरजेंसी तटरक्षक 緊急 警察 救急車 火事 消費者ホットライン 相談",
          sources: [ { label: "Consumer Affairs Agency - 188 Hotline - caa.go.jp", url: "https://www.caa.go.jp/" }, { label: "Japan Coast Guard - 118 - kaiho.mlit.go.jp", url: "https://www.kaiho.mlit.go.jp/" } ],
          reel: "https://www.instagram.com/reel/DezRok0sMdp/",
          en: {
            title: "Emergency Contacts in Japan",
            simple: "Save these numbers in your phone today. For danger right now: Police 110, Fire / Ambulance 119 - free, 24 hours, from any phone. For problems that are NOT an emergency, Japan has two more doors: police advice on #9110, and the Consumer Hotline 188 for shopping and contract trouble.",
            steps: [
              "Police - 110: for a crime happening now, an accident, or danger. Free, 24 hours.",
              "Fire / ambulance - 119: for a fire, sudden illness or serious injury. Free, 24 hours.",
              "Police advice, NOT an emergency - #9110: use it when you need police advice but nobody is in danger right now - a lost item, a suspicious phone call, stalking worry, trouble with a neighbour, or the doubt 'is this a crime?' It connects you to the police consultation centre. Usually weekday daytime; timings change by prefecture.",
              "Consumer Hotline - 188: for shopping and contract trouble - an online order that never came, a fake shopping site, a wrong or broken product, a contract you were pushed to sign, or door-to-door selling pressure. 188 connects you to your nearest Consumer Centre (Shohi Seikatsu Center). Advice is free; only the call charge applies. Help is mainly in Japanese, so keep your bill, screenshots and the shop's name ready.",
              "Sea emergency - 118: for an accident at sea or on the coast, call the Japan Coast Guard on 118.",
              "When you call 110 or 119, say your location first - your address or a nearby landmark.",
              "Save these in your phone today: 110, 119, #9110, 188, your embassy, your company and your support organisation.",
              "Keep your residence card details - and a photo of the card - in your phone."
            ],
            traps: [
              "Do not use 110 for small questions - for advice, use #9110. Save 110 and 119 for real danger.",
              "Do not wait because your Japanese is weak. For 110 and 119, call anyway - speak slowly, in simple words.",
              "Shopping fraud? Do not pay more and do not keep replying to the fake shop. Save the screenshots and bills, call 188 - and if money was taken by trick, also ask the police on #9110.",
              "Learn to say your own address in Japanese before you ever need it."
            ]
          },
          hi: {
            title: "जापान के इमरजेंसी नंबर",
            simple: "ये नंबर आज ही अपने फोन में सेव करें। अभी खतरा हो तो: पुलिस 110, आग / एम्बुलेंस 119 - मुफ़्त, 24 घंटे, किसी भी फोन से। जो परेशानी इमरजेंसी नहीं है, उसके लिए जापान में दो दरवाज़े और हैं: पुलिस की सलाह #9110 पर, और खरीदारी व कॉन्ट्रैक्ट की परेशानी के लिए Consumer Hotline 188।",
            steps: [
              "पुलिस - 110: अभी हो रहा अपराध, एक्सीडेंट या खतरे के लिए। मुफ़्त, 24 घंटे।",
              "आग / एम्बुलेंस - 119: आग, अचानक बीमारी या गंभीर चोट के लिए। मुफ़्त, 24 घंटे।",
              "पुलिस की सलाह, इमरजेंसी नहीं - #9110: जब पुलिस की सलाह चाहिए लेकिन अभी कोई खतरे में नहीं है - खोई हुई चीज़, शक वाला फोन कॉल, पीछा करने की चिंता, पड़ोसी से झगड़ा, या यह शक कि 'क्या यह अपराध है?' यह नंबर आपको पुलिस सलाह केंद्र से जोड़ता है। आमतौर पर हफ़्ते के दिनों में दिन के समय; समय हर प्रान्त में अलग हो सकता है।",
              "Consumer Hotline - 188: खरीदारी और कॉन्ट्रैक्ट की परेशानी के लिए - ऑनलाइन ऑर्डर आया ही नहीं, नकली shopping साइट, ग़लत या टूटा सामान, ज़बरदस्ती साइन कराया गया कॉन्ट्रैक्ट, या घर आकर बेचने का दबाव। 188 आपको आपके सबसे पास वाले Consumer Centre (Shohi Seikatsu Center, उपभोक्ता जीवन केंद्र) से जोड़ता है। सलाह मुफ़्त है; सिर्फ़ कॉल का चार्ज लगता है। मदद ज़्यादातर जापानी में मिलती है, इसलिए अपना बिल, screenshots और दुकान का नाम तैयार रखें।",
              "समुद्र की इमरजेंसी - 118: समुद्र या किनारे पर एक्सीडेंट हो, तो Japan Coast Guard को 118 पर कॉल करें।",
              "110 या 119 पर कॉल करें तो सबसे पहले अपनी जगह बताएँ - अपना पता या आसपास की कोई पहचान वाली जगह।",
              "आज ही ये नंबर फोन में सेव करें: 110, 119, #9110, 188, अपनी एम्बेसी, कंपनी और सपोर्ट संस्था।",
              "अपने रेज़िडेंस कार्ड की डिटेल - और कार्ड की एक फोटो - फोन में रखें।"
            ],
            traps: [
              "छोटे सवालों के लिए 110 का इस्तेमाल न करें - सलाह के लिए #9110 है। 110 और 119 असली खतरे के लिए बचाकर रखें।",
              "जापानी कमज़ोर है, इसलिए रुकें नहीं। 110 / 119 पर कॉल करें ही - धीरे बोलें, आसान शब्दों में।",
              "खरीदारी में धोखा हुआ? नकली दुकान को और पैसे न दें और बार-बार जवाब भी न दें। Screenshots और बिल सेव करें, 188 पर कॉल करें - और ठगकर पैसे लिए गए हों, तो #9110 पर पुलिस से भी पूछें।",
              "अपना पता जापानी में बोलना पहले से सीख लें - ज़रूरत पड़ने से पहले।"
            ]
          },
          ja: {
            title: "日本の緊急電話番号",
            simple: "今日、あなたの電話にこの番号を保存してください。今、危ないとき: 警察（けいさつ）110、火事（かじ）・救急車（きゅうきゅうしゃ）119。無料（むりょう）、24時間、どの電話からでもかけることができます。緊急ではない問題には、もう2つの窓口があります。警察の相談（そうだん）#9110と、買い物や契約（けいやく）のトラブルのための消費者（しょうひしゃ）ホットライン188です。",
            steps: [
              "警察 - 110: 今、犯罪（はんざい）があるとき、事故（じこ）のとき、危ないとき。無料、24時間。",
              "火事・救急車 - 119: 火事のとき、急な病気（びょうき）や大きなけがのとき。無料、24時間。",
              "警察の相談、緊急ではないとき - #9110: 警察に相談したいけれど、今は誰も危なくないとき。なくした物、あやしい電話、ストーカーの心配（しんぱい）、近所の人とのトラブル、「これは犯罪ですか？」という疑問（ぎもん）。警察の相談センターにつながります。多くは平日（へいじつ）の昼。時間は県でちがいます。",
              "消費者ホットライン - 188: 買い物や契約のトラブルのため。届かないオンライン注文、にせの買い物サイト、まちがった商品・こわれた商品、むりにサインさせられた契約、家に来て売る人の圧力（あつりょく）。188は近くの消費生活（しょうひせいかつ）センターにつながります。相談は無料。電話のお金だけかかります。日本語だけのことが多いです。レシート、スクリーンショット、店の名前を準備（じゅんび）してください。",
              "海の緊急 - 118: 海や海岸（かいがん）で事故のとき、海上保安庁（かいじょうほあんちょう）の118に電話してください。",
              "110や119に電話するとき、最初に場所を言ってください。あなたの住所（じゅうしょ）か、近くの有名な建物。",
              "今日、電話に保存してください: 110、119、#9110、188、あなたの大使館（たいしかん）、会社、サポート団体（だんたい）。",
              "在留（ざいりゅう）カードの情報（じょうほう）と、カードの写真を電話に入れておいてください。"
            ],
            traps: [
              "小さい質問に110を使わないでください。相談は#9110です。110と119は本当に危ないときのために。",
              "日本語が上手じゃなくても、待たないでください。110と119は電話してください。ゆっくり、簡単（かんたん）な言葉で話してください。",
              "買い物の詐欺（さぎ）？ もっと払わないでください。にせの店に返信し続けないでください。スクリーンショットとレシートを保存して、188に電話してください。お金を取られたら、#9110で警察にも相談してください。",
              "必要（ひつよう）になる前に、自分の住所を日本語で言えるようにしておいてください。"
            ]
          }
        },
        {
          id: "prometric-registration", section: "exams",
          keywords: "prometric exam test booking jft-basic jft japanese test registration skill test परीक्षा टेस्ट बुकिंग रजिस्ट्रेशन जापानी परीक्षा पासपोर्ट 試験 予約 プロメトリック JFT 申込",
          sources: [ { label: "Prometric - Official SSW Test Booking - prometric-jp.com", url: "https://www.prometric-jp.com/en/ssw/" }, { label: "JFT-Basic - Japan Foundation - jpf.go.jp", url: "https://www.jpf.go.jp/jft-basic/e/" } ],
          reel: "https://www.instagram.com/reel/DfCqgyDBkXP/",
          en: {
            title: "Prometric Registration - Booking Your Tests",
            simple: "The SSW skill tests and the JFT-Basic Japanese test are booked on Prometric's website. You make one free account, choose your test, pick a date and city, and pay the test fee. Go slowly - your name must match your ID exactly.",
            steps: [
              "Open the Prometric page for your test - the links are on the SSW official portal.",
              "Create your Prometric ID, using the exact name spelling from your passport.",
              "Choose your test: the SSW skill test for your field, or JFT-Basic.",
              "Pick a test centre, a date and a time.",
              "Pay the fee and save the confirmation email.",
              "On test day, carry the same ID you registered with."
            ],
            traps: [
              "A name spelling different from your passport means big trouble on test day. Copy it letter by letter.",
              "Book early - seats fill fast near deadlines.",
              "Book only on the official Prometric site, not through agents charging extra."
            ]
          },
          hi: {
            title: "Prometric रजिस्ट्रेशन - टेस्ट बुक कैसे करें",
            simple: "SSW स्किल टेस्ट और JFT-Basic जापानी टेस्ट की बुकिंग Prometric की वेबसाइट पर होती है। एक मुफ़्त अकाउंट बनाएँ, अपना टेस्ट चुनें, तारीख और शहर चुनें, और टेस्ट फीस भरें। आराम से करें - आपका नाम आपके ID से बिल्कुल मिलना चाहिए।",
            steps: [
              "अपने टेस्ट का Prometric पेज खोलें - लिंक SSW आधिकारिक पोर्टल पर मिलते हैं।",
              "अपना Prometric ID बनाएँ - पासपोर्ट वाली नाम की स्पेलिंग ही इस्तेमाल करें।",
              "अपना टेस्ट चुनें: अपने क्षेत्र का SSW स्किल टेस्ट, या JFT-Basic।",
              "टेस्ट सेंटर, तारीख और समय चुनें।",
              "फीस भरें और कन्फर्मेशन ईमेल सेव कर लें।",
              "टेस्ट वाले दिन वही ID साथ ले जाएँ जिससे रजिस्टर किया था।"
            ],
            traps: [
              "नाम की स्पेलिंग पासपोर्ट से अलग = टेस्ट वाले दिन बड़ी मुसीबत। अक्षर-अक्षर मिलाकर लिखें।",
              "जल्दी बुक करें - डेडलाइन के पास सीटें भर जाती हैं।",
              "सिर्फ़ आधिकारिक Prometric साइट से बुक करें, ज़्यादा पैसे लेने वाले एजेंटों से नहीं।"
            ]
          },
          ja: {
            title: "Prometricの登録 - 試験の予約",
            simple: "SSWのスキル試験とJFT-Basicの日本語試験は、Prometricのウェブサイトで予約します。無料のアカウントを1つ作って、試験を選んで、日と街を選んで、試験のお金を払います。ゆっくりしてください。名前はIDと完全に同じでなければなりません。",
            steps: [
              "あなたの試験のPrometricページを開いてください。リンクはSSW公式ポータルにあります。",
              "パスポートの名前の文字と完全に同じで、Prometric IDを作ってください。",
              "試験を選んでください: あなたの分野のSSWスキル試験、またはJFT-Basic。",
              "試験センター、日、時間を選んでください。",
              "お金を払って、確認（かくにん）のメールを保存してください。",
              "試験の日は、登録した同じIDを持って行ってください。"
            ],
            traps: [
              "パスポートと違う名前の文字は、試験の日に大きい問題になります。1文字ずつ写してください。",
              "早く予約してください。締切（しめきり）の近くは席（せき）が早く埋まります。",
              "公式のPrometricサイトだけで予約してください。余分にお金を取るエージェントを通さないでください。"
            ]
          }
        },
        {
          id: "ssw2-free-books", section: "exams",
          keywords: "ssw-2 ssw2 books free books book kitab किताब किताबें study material textbook sample questions jaim otaff maff manufacturing food agriculture preparation मुफ़्त पढ़ाई तैयारी सरकारी एग्ज़ाम 本 無料 教科書 サンプル問題 ダウンロード",
          sources: [ { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/en/" } ],
          reel: "https://www.instagram.com/reel/DfXYfe0htFV/",
          en: {
            title: "SSW-2 Books Are FREE - Official Study Material",
            simple: "The official SSW-2 study books and sample questions are FREE from the government. Whatever your field is, you download them from the official sites - never pay an agent for books the government gives away for free.",
            steps: [
              "Go to https://www.ssw.go.jp - the official SSW portal - and find the study material section.",
              "Choose your field - every field has its own official textbook and sample questions.",
              "Download the free official textbook and sample questions for your field: Manufacturing via JAIM, Food via OTAFF, Agriculture via MAFF.",
              "Manufacturing workers: the JAIM No.2 textbook needs a free “My Page” registration - about 2 minutes, and no money at all."
            ],
            traps: [
              "The books are free, but the EXAM is not - the exam fee is about ¥14,000–15,000. Keep your money only for that.",
              "These books are almost entirely in Japanese only. The real preparation is field study PLUS Japanese - work toward N3-level reading."
            ]
          },
          hi: {
            title: "SSW-2 की किताबें FREE हैं - सरकारी Study Material",
            simple: "SSW-2 की आधिकारिक किताबें और sample questions सरकार से बिल्कुल FREE मिलते हैं। आपका क्षेत्र कोई भी हो, किताबें आधिकारिक साइटों से download होती हैं - जो किताबें सरकार मुफ़्त देती है, उनके लिए किसी एजेंट को कभी पैसे न दें।",
            steps: [
              "https://www.ssw.go.jp पर जाएँ - यह आधिकारिक SSW पोर्टल है - और वहाँ study material वाला हिस्सा खोलें।",
              "अपना क्षेत्र चुनें - हर क्षेत्र की अपनी आधिकारिक किताब और sample questions हैं।",
              "अपने क्षेत्र की FREE आधिकारिक textbook और sample questions download करें: Manufacturing की JAIM से, Food की OTAFF से, Agriculture की MAFF से मिलती है।",
              "Manufacturing वालों के लिए: JAIM की No.2 किताब के लिए FREE “My Page” रजिस्ट्रेशन चाहिए - करीब 2 मिनट लगते हैं, कोई पैसा नहीं लगता।"
            ],
            traps: [
              "किताबें FREE हैं, लेकिन EXAM FREE नहीं है - exam की फीस करीब ¥14,000–15,000 है। अपना पैसा सिर्फ़ उसी के लिए रखें।",
              "ये किताबें लगभग पूरी तरह जापानी में ही हैं। असली तैयारी है: क्षेत्र की पढ़ाई + जापानी - N3 level की reading की ओर काम करें।"
            ]
          },
          ja: {
            title: "SSW-2の本は無料 - 公式の勉強の材料",
            simple: "公式のSSW-2の勉強の本とサンプル問題は、政府から無料です。あなたの分野が何でも、公式サイトからダウンロードします。政府が無料で出す本に、エージェントにお金を払わないでください。",
            steps: [
              "https://www.ssw.go.jp - 公式SSWポータル - に行って、勉強の材料の部分を見つけてください。",
              "あなたの分野を選んでください。分野ごとに公式の教科書（きょうかしょ）とサンプル問題があります。",
              "あなたの分野の無料の公式教科書とサンプル問題をダウンロードしてください: 製造（せいぞう）はJAIM、食品（しょくひん）はOTAFF、農業（のうぎょう）はMAFF。",
              "製造の人: JAIMの2号の教科書には無料の「マイページ」登録（とうろく）が必要です。約2分、お金は全くかかりません。"
            ],
            traps: [
              "本は無料ですが、試験は無料ではありません。試験のお金は約14,000-15,000円です。あなたのお金はそのためだけに残してください。",
              "この本はほとんど日本語だけです。本当の準備は、分野の勉強プラス日本語です。N3レベルの読みを目指してください。"
            ]
          }
        },
        {
          id: "minimum-wage", section: "money",
          keywords: "minimum wage salary pay payslip money yen wage per hour prefecture pension tax वेतन न्यूनतम वेतन सैलरी पैसा तनख्वाह पेमेंट पेंशन टैक्स 最低賃金 給料 時給 県 東京",
          sources: [ { label: "MHLW - Official Minimum Wage List - mhlw.go.jp", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/minimumichiran/index.html" } ],
          reel: "https://www.instagram.com/reel/DfPd6nwS9VT/",
          en: {
            title: "Minimum Wage in Japan",
            simple: "Every prefecture in Japan fixes a minimum hourly wage, and it is exactly the same for foreign workers. In 2026, Tokyo's rate is ¥1,280 per hour and the national weighted average is ¥1,177. If your hourly pay is below your own prefecture's rate, that is against the rules.",
            steps: [
              "Find your prefecture's current rate on the MHLW website.",
              "Check your payslip: divide your base pay by the hours you worked.",
              "Compare the two numbers - below the minimum means something is wrong.",
              "Talk to your support organisation, or to the Labour Standards Inspection Office."
            ],
            traps: [
              "“Foreigners get less” is false - the same minimum applies to everyone.",
              "The rate changes every year (usually in October) - always check the newest one.",
              "Overtime hours must be paid extra, on top of the minimum wage."
            ]
          },
          hi: {
            title: "जापान में न्यूनतम वेतन",
            simple: "जापान का हर प्रान्त (prefecture) एक न्यूनतम प्रति-घंटा वेतन तय करता है, और यह विदेशी वर्करों के लिए भी बिल्कुल उतना ही है। 2026 में टोक्यो का रेट ¥1,280 प्रति घंटा है और राष्ट्रीय भारित औसत ¥1,177 है। अगर आपका प्रति-घंटा वेतन आपके अपने प्रान्त के रेट से कम है, तो यह नियमों के खिलाफ़ है।",
            steps: [
              "MHLW की वेबसाइट पर अपने प्रान्त का ताज़ा रेट देखें।",
              "अपनी पे-स्लिप जाँचें: मूल वेतन को काम के घंटों से भाग दें।",
              "दोनों नंबर मिलाएँ - न्यूनतम से कम मतलब कुछ गलत है।",
              "अपनी सपोर्ट संस्था से, या श्रम मानक निरीक्षण कार्यालय से बात करें।"
            ],
            traps: [
              "“विदेशियों को कम मिलता है” - झूठ है; वही न्यूनतम सब पर लागू होता है।",
              "रेट हर साल बदलता है (आमतौर पर अक्टूबर में) - हमेशा सबसे नया रेट देखें।",
              "ओवरटाइम के घंटे न्यूनतम वेतन से ऊपर, अलग से ज़्यादा दर पर मिलने चाहिए।"
            ]
          },
          ja: {
            title: "日本の最低賃金（さいていちんぎん）",
            simple: "日本の県ごとに、1時間の最低のお金が決まっています。外国人の働く人も全く同じです。2026年、東京は1時間1,280円、国の平均（へいきん）は1,177円です。あなたの1時間のお金が、あなたの県のお金より少ないとき、それはルール違反（いはん）です。",
            steps: [
              "厚生労働省（こうせいろうどうしょう）のウェブサイトで、あなたの県の今のお金を見つけてください。",
              "給料明細を確認してください: 基本（きほん）の給料を、働いた時間で割ってください。",
              "2つの数字を比べてください。最低より少ないとき、何かまちがっています。",
              "あなたの支援機関か、労働基準監督署に相談してください。"
            ],
            traps: [
              "「外国人は少ない」はウソです。同じ最低が全員に当たります。",
              "お金は毎年変わります（普通は10月）。いつも新しいものを確認してください。",
              "残業の時間は、最低賃金の上に、余分に払わなければなりません。"
            ]
          }
        },
        {
          id: "work-contract-words", section: "money",
          keywords: "contract keiyaku roudou jouken tsuuchisho work conditions overtime zangyou fixed overtime penalty iyakukin shift work sign hanko basic salary deduction allowance कॉन्ट्रैक्ट साइन ओवरटाइम जुर्माना शिफ्ट अनुबंध वेतन कटौती भत्ता 契約 労働条件通知書 残業 固定残業代 違約金 交代勤務 署名 捺印 基本給 手当 控除",
          sources: [ { label: "Ministry of Health, Labour and Welfare - mhlw.go.jp", url: "https://www.mhlw.go.jp/" }, { label: "OTIT - otit.go.jp", url: "https://www.otit.go.jp/" }, { label: "Instagram Post - 16 Contract Words With Pictures - instagram.com", url: "https://www.instagram.com/p/DgAlFYlCS-W/" } ],
          reel: "https://www.instagram.com/reel/DgAlAsEBAAF/",
          en: {
            title: "Japan Work Contract - Read Before You Sign",
            simple: "Before you start a job in Japan, the company must give you one paper - the Roudou Jouken Tsuuchisho. It lists your salary, your hours, your holidays and every rule of your job. This guide explains the 16 words on that paper in very simple words, the 3 danger points to check before you sign, and the 4 steps to take if the company breaks a rule. Read first, sign later - if you understand your contract, nobody can cheat you.",
            steps: [
              "The paper itself - 労働条件通知書 (roudou jouken tsuuchisho): the company must give you this paper before you start. It lists all your job conditions. Always keep your own copy safe.",
              "契約期間 (keiyaku kikan) - contract period: how long your job lasts. Check the end date on the very first day.",
              "基本給 (kihonkyuu) - basic salary. Overtime money is counted on this amount - if the basic pay is written low, your overtime pay also becomes low.",
              "手当 (teate) - allowance: extra money on top of salary. Check which allowance it is, and how much it is.",
              "残業 (zangyou) - overtime: work after your fixed hours. It must be paid at least 25% extra.",
              "控除 (koujo) - deduction: money cut from your salary. Every cut must have a written reason.",
              "社会保険 (shakai hoken) - government health and pension insurance. This cut is correct - it makes your hospital treatment cheap.",
              "有給休暇 (yuukyuu kyuuka) - paid holiday: a day off with no salary cut. After 6 months of work, you get at least 10 days.",
              "休日 (kyuujitsu) - your weekly day off. At least 1 day off every week is your legal right.",
              "試用期間 (shiyou kikan) - trial period (probation) at the start of the job. Salary and rules stay the same in this period too.",
              "解雇 (kaiko) - the company removing you from the job (firing). Sudden firing is illegal - the company must inform you 30 days before.",
              "退職 (taishoku) - leaving the job yourself (resignation). Check the rule first - usually you inform the company 2 weeks before.",
              "署名・捺印 (shomei / natsuin) - signing a paper and putting your stamp (hanko). Never sign anything without reading it first.",
              "DANGER POINT 1 - 固定残業代 (kotei zangyou dai): fixed overtime pay already included inside your salary. Check how many hours are included - work above those hours must be paid separately.",
              "DANGER POINT 2 - 交代勤務 (koutai kinmu): rotational shift work - day shift and night shift take turns. Work between 10 PM and 5 AM must be paid at least 25% extra.",
              "DANGER POINT 3 - 違約金 (iyakukin): penalty money asked when you leave a job. For TITP trainee workers this penalty is banned by law - the company cannot take it from you.",
              "Company made a mistake? STEP 1 - take out your contract copy and find the exact point that is broken.",
              "STEP 2 - first, show the contract and talk calmly.",
              "STEP 3 - if they refuse, go to the Labour Standards Inspection Office (労働基準監督署, roudou kijun kantokusho).",
              "STEP 4 - TITP workers also get special free help from OTIT and FRESC. Do not be afraid - Japanese law stands with the worker."
            ],
            traps: [
              "Everything is on paper, not in spoken words. A promise that is not written in the contract does not count.",
              "The law stands with the worker - but only the person who kept his contract copy can prove his point. Keep the copy.",
              "Read first, sign later. If you do not understand a word, ask before signing - not after a problem starts."
            ]
          },
          hi: {
            title: "जापान का वर्क कॉन्ट्रैक्ट - साइन करने से पहले पढ़ें",
            simple: "Japan में नौकरी शुरू करने से पहले कंपनी आपको एक काग़ज़ देती है - 労働条件通知書, काम की सारी शर्तें लिखी हुई सबसे ज़रूरी काग़ज़। इस guide में उस काग़ज़ के 16 शब्द बिल्कुल आसान भाषा में हैं - हर शब्द का मतलब और एक काम की tip। साथ में 3 ख़तरे के पॉइंट, जो साइन से पहले ज़रूर देखने हैं, और कंपनी ग़लती करे तो उठाने वाले 4 step। पहले कॉन्ट्रैक्ट पढ़ो, फिर साइन करो - कॉन्ट्रैक्ट समझोगे तो कोई धोखा नहीं दे पाएगा।",
            steps: [
              "काग़ज़ ख़ुद - 労働条件通知書 (roudou jouken tsuuchisho): नौकरी शुरू होने से पहले कंपनी को ये काग़ज़ देना ही पड़ता है। इसमें आपकी नौकरी की सारी शर्तें लिखी होती हैं। इसकी कॉपी हमेशा अपने पास सुरक्षित रखो।",
              "契約期間 (keiyaku kikan) - कॉन्ट्रैक्ट का समय: आपकी नौकरी कितने समय के लिए है। ख़त्म होने की तारीख़ पहले दिन ही देख लो।",
              "基本給 (kihonkyuu) - बेसिक सैलरी। ओवरटाइम का पैसा इसी रकम पर गिना जाता है - बेसिक कम लिखा हो तो ओवरटाइम भी कम मिलेगा।",
              "手当 (teate) - भत्ता: सैलरी के ऊपर मिलने वाला एक्स्ट्रा पैसा। कौन सा भत्ता है और कितना है - साफ़ देखो।",
              "残業 (zangyou) - ओवरटाइम: तय समय के बाद का काम। इसका पैसा कम से कम 25% ज़्यादा मिलना चाहिए।",
              "控除 (koujo) - कटौती: सैलरी से कटने वाला पैसा। हर कटौती की वजह लिखी होनी चाहिए।",
              "社会保険 (shakai hoken) - सेहत और पेंशन का सरकारी बीमा। ये कटना सही है - इससे अस्पताल का इलाज सस्ता होता है।",
              "有給休暇 (yuukyuu kyuuka) - पैसों वाली छुट्टी: सैलरी कटे बिना छुट्टी। 6 महीने काम के बाद कम से कम 10 दिन मिलते हैं।",
              "休日 (kyuujitsu) - हफ़्ते की छुट्टी वाला दिन। हफ़्ते में कम से कम 1 छुट्टी आपका क़ानूनी हक़ है।",
              "試用期間 (shiyou kikan) - शुरुआत का आज़माइशी समय (probation)। इस समय में भी सैलरी और नियम वही रहते हैं।",
              "解雇 (kaiko) - कंपनी का आपको नौकरी से निकालना। अचानक निकालना ग़ैरक़ानूनी है - 30 दिन पहले बताना होता है।",
              "退職 (taishoku) - ख़ुद नौकरी छोड़ना। छोड़ने से पहले नियम देखो - आम तौर पर 2 हफ़्ते पहले बताते हैं।",
              "署名・捺印 (shomei / natsuin) - साइन करना और मोहर (स्टाम्प) लगाना। पढ़े बिना कभी साइन मत करो।",
              "ख़तरा पॉइंट 1 - 固定残業代 (kotei zangyou dai): सैलरी में पहले से शामिल तय ओवरटाइम का पैसा। देखो कितने घंटे का ओवरटाइम शामिल है - उससे ज़्यादा काम का पैसा अलग मिलेगा।",
              "ख़तरा पॉइंट 2 - 交代勤務 (koutai kinmu): बारी-बारी से बदलने वाली ड्यूटी - दिन की शिफ़्ट और रात की शिफ़्ट। रात 10 बजे से सुबह 5 बजे के काम पर कम से कम 25% एक्स्ट्रा मिलता है।",
              "ख़तरा पॉइंट 3 - 違約金 (iyakukin): नौकरी छोड़ने पर माँगा जाने वाला जुर्माना पैसा। TITP प्रशिक्षु मज़दूरों के लिए ये जुर्माना क़ानून से मना है - कंपनी ये पैसा नहीं ले सकती।",
              "कंपनी ग़लती करे तो? STEP 1 - अपनी कॉन्ट्रैक्ट की कॉपी निकालो और ग़लती वाला पॉइंट ढूँढो।",
              "STEP 2 - पहले शांति से कॉन्ट्रैक्ट दिखा कर बात करो।",
              "STEP 3 - ना माने तो Labour Standards Office (労働基準監督署) जाओ।",
              "STEP 4 - TITP मज़दूरों के लिए OTIT और FRESC की ख़ास मुफ़्त मदद भी है। डरने की ज़रूरत नहीं - जापान का क़ानून मज़दूर के साथ खड़ा है।"
            ],
            traps: [
              "कंपनी की हर बात मुँह से नहीं, काग़ज़ पर होती है। जो वादा कॉन्ट्रैक्ट में लिखा नहीं, वो गिना नहीं जाता।",
              "क़ानून मज़दूर के साथ खड़ा है - लेकिन अपनी बात सिर्फ़ वही साबित कर सकता है जिसके पास कॉन्ट्रैक्ट की कॉपी है। कॉपी हमेशा रखो।",
              "पहले पढ़ो, फिर साइन करो। कोई शब्द समझ न आए तो साइन से पहले पूछो - परेशानी शुरू होने के बाद नहीं।"
            ]
          },
          ja: {
            title: "日本の仕事の契約（けいやく）- サインの前に読んでください",
            simple: "日本で仕事を始める前に、会社は1つの紙を渡します - 労働条件通知書（ろうどうじょうけんつうちしょ）、仕事の条件が全部書いてある、いちばん大切な紙です。このガイドは、その紙の16の言葉を簡単な言葉で説明（せつめい）します。サインの前に見る3つの危ないポイントと、会社がルールを破（やぶ）ったときの4つのステップもあります。先に読んで、後でサインしてください。コントラクトが分かれば、だまされません。",
            steps: [
              "紙（かみ）そのもの - 労働条件通知書（ろうどうじょうけんつうちしょ）: 仕事を始める前に、会社はこの紙を渡さなければなりません。仕事の条件が全部書いてあります。コピーをいつも自分で持ってください。",
              "契約期間（けいやくきかん）- コントラクトの時間: あなたの仕事がどのぐらいの時間か。終わりの日を最初の日に確認（かくにん）してください。",
              "基本給（きほんきゅう）- 基本の給料。残業のお金はこの金額（きんがく）で数えます。基本給が少ないと、残業のお金も少なくなります。",
              "手当（てあて）- 給料の上に来る余分なお金。どの手当か、いくらか、はっきり確認してください。",
              "残業（ざんぎょう）- 決まった時間の後の仕事。お金は25%以上、多くなければなりません。",
              "控除（こうじょ）- 給料から引かれるお金。全部の引かれるお金に、書いた理由（りゆう）が必要です。",
              "社会保険（しゃかいほけん）- 健康（けんこう）と年金の国の保険（ほけん）。この引き方は正しいです。病院の治療（ちりょう）が安くなります。",
              "有給休暇（ゆうきゅうきゅうか）- お金のある休み: 給料が減らない休み。6ヶ月働いた後、10日以上もらえます。",
              "休日（きゅうじつ）- 週の休みの日。週に1日以上の休みは、法律（ほうりつ）の権利（けんり）です。",
              "試用期間（しようきかん）- 仕事の最初の試しの時間。この時間も、給料とルールは同じです。",
              "解雇（かいこ）- 会社があなたを仕事から出すこと。急に出すことは法律違反（ほうりついはん）です。30日前に言わなければなりません。",
              "退職（たいしょく）- 自分で仕事をやめること。先にルールを確認してください。普通は2週間前に言います。",
              "署名（しょめい）・捺印（なついん）- 紙にサインすることと、はんこを押すこと。読まないで、絶対（ぜったい）にサインしないでください。",
              "危ないポイント1 - 固定残業代（こていざんぎょうだい）: 給料の中に先に入っている決まった残業のお金。何時間入っているか確認してください。それより多い仕事のお金は別にもらえます。",
              "危ないポイント2 - 交代勤務（こうたいきんむ）: 昼のシフトと夜のシフトが交代する仕事。夜10時から朝5時の仕事は、25%以上多くなければなりません。",
              "危ないポイント3 - 違約金（いやくきん）: 仕事をやめるときに払う罰（ばつ）のお金。技能実習生（ぎのうじっしゅうせい）からは、このお金は法律で禁止（きんし）です。会社は取れません。",
              "会社がまちがえたら? ステップ1 - あなたのコントラクトのコピーを出して、まちがえたポイントを見つけてください。",
              "ステップ2 - 先に、コントラクトを見せて、静かに話してください。",
              "ステップ3 - 会社が聞かなければ、労働基準監督署（ろうどうきじゅんかんとくしょ）に行ってください。",
              "ステップ4 - 技能実習生には、OTITとFRESCの無料の特別な助けもあります。怖（こわ）がらないでください。日本の法律は働く人の味方です。"
            ],
            traps: [
              "会社の全部の約束（やくそく）は、口ではなく紙の上にあります。コントラクトに書いていない約束は、数えられません。",
              "法律は働く人の味方です。でも、コントラクトのコピーを持っている人だけが、自分の話を証明（しょうめい）できます。コピーをいつも持ってください。",
              "先に読んで、後でサインしてください。分からない言葉があれば、問題が始まる前ではなく、サインの前に聞いてください。"
            ]
          }
        },
        {
          id: "titp-ending-ikusei-shuro", section: "visas",
          keywords: "titp ending ikusei shuro 2027 new system visa change ट्रेनिंग खत्म नया सिस्टम वीज़ा बदलाव 育成就労 技能実習 終わり 新しい制度 2027",
          sources: [ { label: "Immigration Services Agency (ISA) - moj.go.jp", url: "https://www.moj.go.jp/isa/" }, { label: "OTIT - otit.go.jp", url: "https://www.otit.go.jp/" } ],
          en: {
            title: "TITP Is Ending - The New Ikusei Shuro System",
            simple: "TITP will be replaced by a new system called Ikusei Shuro (Employment for Skill Development) from 1 April 2027. The new system is designed to train workers and lead them into SSW. If you are on TITP now, your road forward passes through this change - so plan early.",
            steps: [
              "Know the date your TITP period ends - do not wait for the last month.",
              "The new Ikusei Shuro system starts on 1 April 2027 and is built to connect into SSW.",
              "Build your Japanese and your skills now - they decide your next step.",
              "Talk to your supervising or support organisation about your options."
            ],
            traps: [
              "Do not believe rumours - check the SSW official portal for the real rules.",
              "Waiting until your period ends leaves you no time to change routes.",
              "Anyone selling a “guaranteed conversion” is misleading you."
            ]
          },
          hi: {
            title: "TITP खत्म हो रहा है - नया Ikusei Shuro सिस्टम",
            simple: "TITP की जगह 1 अप्रैल 2027 से एक नया सिस्टम आएगा - Ikusei Shuro (कौशल विकास के लिए रोज़गार)। नया सिस्टम वर्करों को ट्रेनिंग देकर SSW की ओर ले जाने के लिए बनाया गया है। अगर आप अभी TITP पर हैं, तो आपका आगे का रास्ता इसी बदलाव से होकर जाता है - इसलिए पहले से प्लान करें।",
            steps: [
              "अपनी TITP अवधि खत्म होने की तारीख जानें - आखिरी महीने तक इंतज़ार न करें।",
              "नया Ikusei Shuro सिस्टम 1 अप्रैल 2027 से शुरू होगा और SSW से जुड़ने के लिए बना है।",
              "अभी से अपनी जापानी और स्किल मज़बूत करें - यही आपका अगला कदम तय करेंगे।",
              "अपने विकल्पों पर अपनी निगरानी या सपोर्ट संस्था से बात करें।"
            ],
            traps: [
              "अफवाहों पर भरोसा न करें - असली नियमों के लिए SSW आधिकारिक पोर्टल देखें।",
              "अवधि खत्म होने तक इंतज़ार करने से रास्ता बदलने का समय नहीं बचता।",
              "“गारंटीड बदलाव” बेचने वाला आपको गुमराह कर रहा है।"
            ]
          },
          ja: {
            title: "TITPは終わります - 新しい育成就労（いくせいしゅうろう）の制度（せいど）",
            simple: "TITPは2027年4月1日から、育成就労という新しい制度に変わります。新しい制度は、働く人を育てて、SSWにつなげるために作られました。今TITPの人は、この変化を通って前に進みます。早く計画してください。",
            steps: [
              "あなたのTITPの期間（きかん）が終わる日を知ってください。最後の月まで待たないでください。",
              "新しい育成就労の制度は2027年4月1日に始まります。SSWにつながるように作られています。",
              "今、日本語とスキルを上げてください。それが次のステップを決めます。",
              "あなたの監理団体（かんりだんたい）か支援機関に、あなたの選択肢（せんたくし）を相談してください。"
            ],
            traps: [
              "うわさを信じないでください。本当のルールはSSW公式ポータルで確認してください。",
              "期間が終わるまで待つと、道を変える時間がありません。",
              "「確実（かくじつ）に変えられる」と売る人は、あなたをだましています。"
            ]
          }
        },
        {
          id: "ssw1-to-ssw2", section: "visas",
          keywords: "ssw2 ssw-2 ssw1 upgrade family spouse children five years renew वीज़ा अपग्रेड परिवार पत्नी बच्चे पाँच साल रिन्यू 特定技能2号 家族 更新 アップグレード",
          sources: [ { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/en/" }, { label: "Immigration Services Agency (ISA) - moj.go.jp", url: "https://www.moj.go.jp/isa/" } ],
          en: {
            title: "SSW-1 to SSW-2 - The Big Upgrade",
            simple: "SSW-1 lets you stay up to 5 years in total, and your family cannot join you. SSW-2 is the upgrade: it can be renewed with no total limit, and your spouse and children can live with you. SSW-2 exists in 11 fields and needs an advanced skill exam plus work experience. One warning: nursing care (kaigo) has NO SSW-2.",
            steps: [
              "Check that your field is one of the 11 fields that have SSW-2.",
              "Build your work experience while you are on SSW-1.",
              "Pass the advanced SSW-2 skill exam for your field.",
              "Apply to change your status before your SSW-1 period runs out."
            ],
            traps: [
              "The 5-year SSW-1 clock keeps running - start preparing in year 2–3, not year 5.",
              "Kaigo workers: there is no SSW-2 in care work - read the Kaigo guide for your other door.",
              "Family can join you only on SSW-2 (and on the Kaigo status) - not on SSW-1."
            ]
          },
          hi: {
            title: "SSW-1 से SSW-2 - बड़ा अपग्रेड",
            simple: "SSW-1 पर आप कुल 5 साल तक रह सकते हैं, और आपका परिवार साथ नहीं आ सकता। SSW-2 इसका अपग्रेड है: यह बिना किसी कुल सीमा के रिन्यू हो सकता है, और आपके पति/पत्नी और बच्चे आपके साथ रह सकते हैं। SSW-2 11 क्षेत्रों में है और इसके लिए एक ऊँचा स्किल एग्ज़ाम और काम का अनुभव चाहिए। एक चेतावनी: नर्सिंग केयर (Kaigo) में SSW-2 नहीं है।",
            steps: [
              "जाँचें कि आपका क्षेत्र उन 11 क्षेत्रों में है जिनमें SSW-2 है।",
              "SSW-1 पर रहते हुए अपना काम का अनुभव बनाएँ।",
              "अपने क्षेत्र का SSW-2 का ऊँचा स्किल एग्ज़ाम पास करें।",
              "SSW-1 की अवधि खत्म होने से पहले स्टेटस बदलने का आवेदन करें।"
            ],
            traps: [
              "SSW-1 की 5 साल की घड़ी चलती रहती है - तैयारी साल 2–3 से शुरू करें, साल 5 में नहीं।",
              "Kaigo वर्कर: केयर वर्क में SSW-2 नहीं है - अपना दूसरा दरवाज़ा Kaigo गाइड में पढ़ें।",
              "परिवार सिर्फ़ SSW-2 (और Kaigo स्टेटस) पर साथ आ सकता है - SSW-1 पर नहीं।"
            ]
          },
          ja: {
            title: "SSW-1からSSW-2へ - 大きなアップグレード",
            simple: "SSW-1は全部で5年まで。家族は一緒に住めません。SSW-2はアップグレードです。更新（こうしん）に合計の制限（せいげん）はありません。配偶者（はいぐうしゃ）と子どもが一緒に住めます。SSW-2は11の分野にあります。高いレベルのスキル試験と仕事の経験が必要です。1つ警告（けいこく）: 介護（かいご）にはSSW-2がありません。",
            steps: [
              "あなたの分野がSSW-2のある11分野の1つか確認してください。",
              "SSW-1の間に仕事の経験を作ってください。",
              "あなたの分野の高いレベルのSSW-2スキル試験に合格してください。",
              "SSW-1の期間が終わる前に、資格の変更（へんこう）を申請してください。"
            ],
            traps: [
              "SSW-1の5年の時計は動き続けます。5年目ではなく、2-3年目に準備を始めてください。",
              "介護の人: 介護の仕事にはSSW-2がありません。あなたの別のドアは介護のガイドを読んでください。",
              "家族が一緒に住めるのはSSW-2（と介護の資格）だけです。SSW-1ではできません。"
            ]
          }
        },
        {
          id: "kaigo-other-door", section: "visas",
          keywords: "kaigo care nursing care worker fukushishi exam nurse elderly देखभाल नर्सिंग केयर वर्कर परीक्षा बुज़ुर्ग सेवा 介護 介護福祉士 国家試験 家族 ドア",
          sources: [ { label: "Kaigo Fukushishi Exam Centre - sssc.or.jp", url: "https://www.sssc.or.jp/" }, { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/en/" } ],
          reel: "https://www.instagram.com/reel/DfVgJr8ze-J/",
          en: {
            title: "Kaigo Workers: The Other Door",
            simple: "Care workers, listen carefully: there is no SSW-2 in kaigo. Your other door is the “Kaigo” residence status, which you earn by passing the Kaigo Fukushishi national exam. Pass it, and your status can be renewed without the 5-year wall - and your family can join you.",
            steps: [
              "Work in care and complete 3 or more years of care work experience.",
              "Complete the Jitsumusha Kenshuu practical training - about 450 hours.",
              "Apply for the Kaigo Fukushishi national exam - held once a year, in January, in Japanese.",
              "Pass the exam and change to the “Kaigo” residence status."
            ],
            traps: [
              "Start in year 2–3 - experience, training and the exam cycle together take years.",
              "The exam is fully in Japanese - your Japanese study is not optional.",
              "Do not wait for an SSW-2 in kaigo. It does not exist."
            ]
          },
          hi: {
            title: "Kaigo वर्कर: आपके लिए दूसरा दरवाज़ा",
            simple: "केयर वर्कर, ध्यान से सुनें: Kaigo में SSW-2 नहीं है। आपका दूसरा दरवाज़ा “Kaigo” रेज़िडेंस स्टेटस है, जो Kaigo Fukushishi राष्ट्रीय परीक्षा पास करने से मिलता है। पास कर लिया, तो आपका स्टेटस 5 साल की दीवार के बिना रिन्यू होता रहेगा - और आपका परिवार भी साथ आ सकता है।",
            steps: [
              "केयर में काम करें और 3 साल या उससे ज़्यादा का केयर अनुभव पूरा करें।",
              "Jitsumusha Kenshuu प्रैक्टिकल ट्रेनिंग पूरी करें - करीब 450 घंटे।",
              "Kaigo Fukushishi राष्ट्रीय परीक्षा के लिए आवेदन करें - साल में एक बार, जनवरी में, जापानी में होती है।",
              "परीक्षा पास करें और “Kaigo” रेज़िडेंस स्टेटस में बदलें।"
            ],
            traps: [
              "साल 2–3 से शुरुआत करें - अनुभव, ट्रेनिंग और परीक्षा का चक्र मिलकर सालों लेता है।",
              "परीक्षा पूरी जापानी में है - जापानी की पढ़ाई वैकल्पिक नहीं है।",
              "Kaigo में SSW-2 का इंतज़ार न करें। वह है ही नहीं।"
            ]
          },
          ja: {
            title: "介護の人: もう1つのドア",
            simple: "介護の人、よく聞いてください: 介護にはSSW-2がありません。あなたのもう1つのドアは「介護」の在留資格です。介護福祉士（かいごふくしし）の国家試験に合格するともらえます。合格すれば、5年の壁なしに更新できて、家族が一緒に住めます。",
            steps: [
              "介護で働いて、3年以上の介護の仕事の経験を完成させてください。",
              "実務者研修（じつむしゃけんしゅう）を完成させてください - 約450時間。",
              "介護福祉士の国家試験を申し込んでください - 年に1回、1月、日本語で。",
              "試験に合格して、「介護」の在留資格に変えてください。"
            ],
            traps: [
              "2-3年目に始めてください。経験、研修、試験のサイクルは全部で何年もかかります。",
              "試験は全部日本語です。日本語の勉強は選択（せんたく）ではありません。",
              "介護のSSW-2を待たないでください。存在（そんざい）しません。"
            ]
          }
        },
        {
          id: "agent-money-system", section: "money",
          keywords: "agent money fee fees lakh commission supervising organisation deposit guarantee penalty contract itemised bill agent paisa एजेंट पैसा फीस लाख कमीशन डिपॉज़िट गारंटी पेनल्टी कॉन्ट्रैक्ट बिल エージェント お金 監理団体 請求書 デポジット 禁止",
          sources: [ { label: "OTIT - otit.go.jp", url: "https://www.otit.go.jp/" } ],
          en: {
            title: "Agent Paisa Kaise Kamata Hai? - The Agent Money System",
            simple: "An agent does not earn from only one place. In India, many candidates pay ₹1–3 lakh in the name of training, files and “processing”. In Japan, the company pays a supervising organisation about ¥30,000 every month for each trainee - the candidate does NOT pay this. And some charges you are told to pay are already the company's duty, or are completely free.",
            steps: [
              "First, understand the chain: the India-side agent takes money from you. The Japan-side supervising organisation is paid by the company - about ¥30,000 a month per trainee. That money does not come from you.",
              "Before you pay anything, ask for a full itemised bill - the name of every charge, the amount, and who the money goes to.",
              "Check what is free: official study books and forms are free from the government. Never pay an agent for free things.",
              "Check the real visa cost: the government visa fee is small. If someone asks for lakhs of rupees as “visa fee” alone, stop and ask for proof.",
              "On SSW, support costs are the employer's duty, not the candidate's. Do not pay again for support the company must give you.",
              "Follow Shivam's rule: pay only for real things, with an itemised bill, step by step - never the full amount on day one. Compare 2–3 agents before you choose."
            ],
            traps: [
              "Deposit or “guarantee money” is BANNED under TITP law. If an agent takes it, the agent is wrong - not you.",
              "A paper that makes you pay a penalty if you break the contract is also banned under TITP law. Do not sign such a paper.",
              "Not every agent is dishonest - but without information you cannot tell the good one from the bad one. Always ask for the bill.",
              "No agent can promise a “guaranteed visa”. Anyone selling a guarantee is misleading you."
            ]
          },
          hi: {
            title: "एजेंट पैसा कैसे कमाता है? - एजेंट का पैसा सिस्टम",
            simple: "एजेंट सिर्फ़ एक जगह से नहीं कमाता। इंडिया में कई कैंडिडेट ट्रेनिंग, फ़ाइल और “प्रोसेसिंग” के नाम पर ₹1–3 लाख दे देते हैं। जापान में कंपनी एक सुपरवाइज़िंग संस्था को हर ट्रेनी के पीछे हर महीने करीब ¥30,000 देती है - यह पैसा कैंडिडेट नहीं देता। और कुछ चार्ज जो आपको देने को कहा जाता है, वे पहले से कंपनी की ज़िम्मेदारी होते हैं, या बिल्कुल मुफ़्त होते हैं।",
            steps: [
              "पहले पूरी चेन समझें: इंडिया वाला एजेंट आपसे पैसा लेता है। जापान वाली सुपरवाइज़िंग संस्था को कंपनी पैसा देती है - हर ट्रेनी के पीछे हर महीने करीब ¥30,000। यह पैसा आपकी जेब से नहीं जाता।",
              "कुछ भी देने से पहले पूरा itemised bill माँगें - हर चार्ज का नाम, रकम, और पैसा किसे जाएगा।",
              "जाँचें कि क्या मुफ़्त है: आधिकारिक किताबें और फ़ॉर्म सरकार से मुफ़्त मिलते हैं। मुफ़्त चीज़ों के पैसे एजेंट को कभी न दें।",
              "असली वीज़ा खर्च जाँचें: सरकारी वीज़ा फ़ीस बहुत छोटी होती है। कोई सिर्फ़ “वीज़ा फ़ीस” के नाम पर लाखों माँगे, तो रुकें और सबूत माँगें।",
              "SSW पर सपोर्ट का खर्चा कंपनी की ज़िम्मेदारी है, कैंडिडेट की नहीं। जो सपोर्ट कंपनी को देना ही है, उसके पैसे दोबारा न दें।",
              "शिवम का नियम याद रखें: सिर्फ़ असली चीज़ों के पैसे दें, itemised bill के साथ, स्टेप-बाय-स्टेप - पहला दिन पूरा पैसा कभी नहीं। चुनने से पहले 2–3 एजेंट compare करें।"
            ],
            traps: [
              "डिपॉज़िट या “गारंटी मनी” TITP कानून में BANNED है। कोई एजेंट यह ले, तो ग़लती एजेंट की है - आपकी नहीं।",
              "कॉन्ट्रैक्ट तोड़ने पर पेनल्टी वाला पेपर भी TITP कानून में banned है। ऐसे पेपर पर साइन न करें।",
              "हर एजेंट बेईमान नहीं होता - लेकिन जानकारी के बिना आप अच्छे और बुरे में फ़र्क नहीं कर सकते। हमेशा bill माँगें।",
              "कोई एजेंट “गारंटीड वीज़ा” का वादा नहीं कर सकता। गारंटी बेचने वाला आपको गुमराह कर रहा है।"
            ]
          },
          ja: {
            title: "エージェントはどうやってお金を稼（かせ）ぐ？ - エージェントのお金の仕組み",
            simple: "エージェントは1つの場所からだけ稼ぎません。インドでは、多くの候補者（こうほしゃ）が訓練、ファイル、「処理（しょり）」の名前で1-3ラークルピーを払います。日本では、会社が監理団体に実習生1人について毎月約30,000円を払います。候補者はこれを払いません。そして、あなたが払うように言われるお金の中には、会社の義務（ぎむ）のものや、完全に無料のものがあります。",
            steps: [
              "まず、流れを理解してください: インド側のエージェントはあなたからお金を取ります。日本側の監理団体は会社から払われます。実習生1人、毎月約30,000円。そのお金はあなたから来ません。",
              "何か払う前に、全部の明細（めいさい）の請求書（せいきゅうしょ）を頼んでください: すべての料金の名前、金額、お金が誰に行くか。",
              "何が無料か確認してください: 公式の勉強の本とフォームは政府から無料です。無料のものにエージェントにお金を払わないでください。",
              "本当のビザのお金を確認してください: 政府のビザの料金は小さいです。「ビザ料金」だけで何ラークルピーも要求する人がいたら、止めて、証拠を頼んでください。",
              "SSWでは、支援のお金は雇用主（こようぬし）の義務です。候補者の義務ではありません。会社が出さなければならない支援に、もう一度払わないでください。",
              "Shivamのルールを守ってください: 本当のものだけに、明細の請求書で、少しずつ払ってください。最初の日に全部を払わないでください。選ぶ前に2-3のエージェントを比べてください。"
            ],
            traps: [
              "デポジットや「保証（ほしょう）のお金」は、TITPの法律で禁止（きんし）です。エージェントが取ったら、まちがっているのはエージェントです。あなたではありません。",
              "契約を破（やぶ）ったら罰金（ばっきん）を払わせる紙も、TITPの法律で禁止です。そのような紙にサインしないでください。",
              "すべてのエージェントが不正（ふせい）ではありません。でも情報がなければ、いい人と悪い人が分かりません。いつも請求書を頼んでください。",
              "「確実なビザ」を約束できるエージェントはいません。保証を売る人は、あなたをだましています。"
            ]
          }
        },
        {
          id: "free-japanese-classes", section: "money",
          keywords: "free japanese classes nihongo kyoshitsu learn japanese city hall shiyakusho international association coaching मुफ़्त जापानी क्लास जापानी सीखें सिटी हॉल कोचिंग भाषा 日本語教室 無料 市役所 ボランティア 勉強",
          sources: [ { label: "Agency for Cultural Affairs - bunka.go.jp", url: "https://www.bunka.go.jp/" }, { label: "Irodori - Free Japanese Learning, Japan Foundation - jpf.go.jp", url: "https://www.irodori.jpf.go.jp/en/" } ],
          reel: "https://www.instagram.com/reel/Df8cUL6hRZ3/",
          en: {
            title: "FREE Japanese Classes Near You - Nihongo Kyoshitsu",
            simple: "In almost every city in Japan, a free Japanese class runs near your home. It is called Nihongo Kyoshitsu - a community Japanese class. City offices, international associations and local volunteers run it under the Japanese government's Japanese-language education system. Most classes are free; some take only ¥100–500 for copies and materials.",
            steps: [
              "Step 1 - Search: on Google, type your city name + “Nihongo Kyoshitsu”. Your city's official page will show the class.",
              "Step 2 - Ask at city hall: go to the city hall (市役所, shiyakusho) and ask one line - “Nihongo Kyoshitsu wa doko desu ka?” They will give you the list.",
              "Step 3 - Check the prefecture list: your prefecture's international association website lists all the classes in the whole prefecture.",
              "Join the class: classes are usually once or twice a week, often in the evening or on Sunday - so factory workers can also go.",
              "Keep going every week: you learn the Japanese of daily life, meet Japanese teachers and friends, and get real local information - hospital, rules, events."
            ],
            traps: [
              "Do not throw ¥20,000–30,000 at a coaching course before you check the free class in your own city.",
              "Not literally every small town has a class - if your city has none, city hall will point you to the nearest one.",
              "There is no exam in these classes and every level is welcome - do not feel shy if your Japanese is zero today."
            ]
          },
          hi: {
            title: "आपके पास FREE जापानी क्लास - Nihongo Kyoshitsu",
            simple: "जापान के लगभग हर शहर में आपके घर के पास एक मुफ़्त जापानी क्लास चलती है। इसका नाम है Nihongo Kyoshitsu - कम्युनिटी जापानी क्लास। सिटी ऑफ़िस, इंटरनेशनल एसोसिएशन और स्थानीय volunteers इसे जापान सरकार के जापानी-भाषा शिक्षा सिस्टम के तहत चलाते हैं। ज़्यादातर क्लास बिल्कुल मुफ़्त हैं; कुछ जगह सिर्फ़ कॉपी और सामान के ¥100–500 लगते हैं।",
            steps: [
              "स्टेप 1 - सर्च करें: Google पर अपने शहर का नाम + “Nihongo Kyoshitsu” लिखें। आपके शहर के आधिकारिक पेज पर क्लास मिल जाएगी।",
              "स्टेप 2 - सिटी हॉल में पूछें: सिटी हॉल (市役所, shiyakusho) जाएँ और बस एक लाइन पूछें - “Nihongo Kyoshitsu wa doko desu ka?” वे आपको पूरी लिस्ट दे देंगे।",
              "स्टेप 3 - प्रान्त की लिस्ट देखें: आपके प्रान्त की इंटरनेशनल एसोसिएशन की वेबसाइट पर पूरे प्रान्त की सभी क्लासों की लिस्ट होती है।",
              "क्लास join करें: क्लास आमतौर पर हफ़्ते में एक-दो बार होती है, अक्सर शाम को या रविवार को - इसलिए फ़ैक्ट्री वाले भी जा सकते हैं।",
              "हर हफ़्ते जाते रहें: यहाँ रोज़ की ज़िंदगी वाली जापानी मिलती है, जापानी टीचर और दोस्त बनते हैं, और शहर की असली जानकारी - अस्पताल, नियम, events - सब यहीं से मिलता है।"
            ],
            traps: [
              "अपने शहर की मुफ़्त क्लास देखे बिना कोचिंग पर ¥20,000–30,000 न फेंकें।",
              "शाब्दिक रूप से हर छोटे कस्बे में क्लास नहीं होती - आपके शहर में न हो, तो सिटी हॉल आपको सबसे पास वाली क्लास बता देगा।",
              "इन क्लासों में कोई परीक्षा नहीं होती और हर level के लोग welcome हैं - आज आपकी जापानी zero हो, तो भी शर्माएँ नहीं।"
            ]
          },
          ja: {
            title: "近くの無料の日本語教室 - にほんごきょうしつ",
            simple: "日本のほとんどすべての街で、あなたの家の近くに無料の日本語教室があります。「にほんごきょうしつ」という名前です。市役所（しやくしょ）、国際協会（こくさいきょうかい）、地域（ちいき）のボランティアが、日本政府の日本語教育（きょういく）の仕組みで開いています。多くの教室は無料です。コピーと材料で100-500円だけの教室もあります。",
            steps: [
              "ステップ1 - 検索: Googleで、あなたの街の名前 +「にほんごきょうしつ」と入力してください。あなたの街の公式ページが教室を見せます。",
              "ステップ2 - 市役所で聞く: 市役所に行って、1文聞いてください - 「にほんごきょうしつは どこですか？」リストをもらえます。",
              "ステップ3 - 県のリストを確認: あなたの県の国際協会のウェブサイトに、県の全部の教室のリストがあります。",
              "教室に入る: 教室は普通、週に1-2回。夜や日曜日が多いです。工場の人も行けます。",
              "毎週行き続ける: 毎日の生活の日本語を学んで、日本人の先生と友達に会って、本当の地域の情報 - 病院、ルール、イベント - をもらえます。"
            ],
            traps: [
              "自分の街の無料の教室を確認する前に、コーチングコースに20,000-30,000円を捨てないでください。",
              "本当にすべての小さい町に教室があるわけではありません。あなたの街になければ、市役所が一番近い教室を教えます。",
              "この教室に試験はありません。どのレベルでも歓迎（かんげい）です。今日あなたの日本語がゼロでも、恥ずかしがらないでください。"
            ]
          }
        },
        {
          id: "welding-job-japan", section: "visas",
          keywords: "welding welder shipbuilding ship machinery classnk exam shipyard setouchi salary वेल्डिंग वेल्डर जहाज़ शिपयार्ड परीक्षा वेतन 溶接 造船 ClassNK 技能試験 給料",
          sources: [ { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/en/" } ],
          en: {
            title: "Welding Job in Japan - The SSW Shipbuilding Route",
            simple: "Welding is an official job field in Japan under SSW Shipbuilding & Ship Machinery - the shipyard industry. To work as a welder in Japan, you must pass the official SSW skill exam conducted by ClassNK, with a theory part and a practical welding part. An Indian welding certificate alone does NOT replace this exam. Pay is honest to say: it depends on the region and the company - in the Setouchi region, shipyard welders commonly start around ¥230,000–250,000 a month and grow with experience.",
            steps: [
              "Choose your route: SSW - pass the tests, then work. Or TITP welding - the training route. Both are real government routes.",
              "For SSW, build your Japanese first - JLPT N4 or JFT-Basic level.",
              "Pass the SSW Shipbuilding & Ship Machinery skill exam conducted by ClassNK - theory plus practical welding.",
              "Apply to shipbuilding companies, clear the interview, and come on the SSW status.",
              "Plan your future: shipbuilding has SSW-2 - it can be renewed with no 5-year limit, and your family can join you."
            ],
            traps: [
              "An Indian welding certificate does not replace the ClassNK SSW exam. Certificate in hand is good - the exam is still compulsory.",
              "A certificate is not a visa. The exam, the job and the visa are three separate steps.",
              "Do not trust a fixed salary promise from any agent - shipyard pay changes with the region, the company and your experience."
            ]
          },
          hi: {
            title: "जापान में Welding की नौकरी - SSW शिपबिल्डिंग रास्ता",
            simple: "Welding जापान में एक आधिकारिक नौकरी क्षेत्र है - SSW Shipbuilding & Ship Machinery के तहत, यानी शिपयार्ड उद्योग में। जापान में welder बनकर काम करने के लिए आपको ClassNK द्वारा लिया जाने वाला आधिकारिक SSW स्किल एग्ज़ाम पास करना होगा - इसमें theory और practical welding, दोनों होते हैं। सिर्फ़ इंडिया का welding सर्टिफ़िकेट इस एग्ज़ाम की जगह नहीं ले सकता। वेतन की सच्ची बात: यह क्षेत्र और कंपनी पर निर्भर करता है - Setouchi क्षेत्र में शिपयार्ड welder आमतौर पर करीब ¥230,000–250,000 प्रति माह से शुरू करते हैं और अनुभव के साथ बढ़ता है।",
            steps: [
              "अपना रास्ता चुनें: SSW - टेस्ट पास करें, फिर काम करें। या TITP welding - ट्रेनिंग वाला रास्ता। दोनों असली सरकारी रास्ते हैं।",
              "SSW के लिए पहले अपनी जापानी बनाएँ - JLPT N4 या JFT-Basic level।",
              "ClassNK द्वारा लिया जाने वाला SSW Shipbuilding & Ship Machinery स्किल एग्ज़ाम पास करें - theory + practical welding।",
              "शिपबिल्डिंग कंपनियों में आवेदन करें, इंटरव्यू पास करें और SSW स्टेटस पर जापान आएँ।",
              "भविष्य का प्लान बनाएँ: शिपबिल्डिंग में SSW-2 है - यह बिना 5-साल की सीमा के रिन्यू होता है, और आपका परिवार भी साथ आ सकता है।"
            ],
            traps: [
              "इंडिया का welding सर्टिफ़िकेट ClassNK SSW एग्ज़ाम की जगह नहीं लेता। सर्टिफ़िकेट होना अच्छा है - एग्ज़ाम फिर भी ज़रूरी है।",
              "सर्टिफ़िकेट वीज़ा नहीं होता। एग्ज़ाम, नौकरी और वीज़ा - ये तीन अलग स्टेप हैं।",
              "किसी एजेंट के तय वेतन वाले वादे पर भरोसा न करें - शिपयार्ड का वेतन क्षेत्र, कंपनी और आपके अनुभव के साथ बदलता है।"
            ]
          },
          ja: {
            title: "日本の溶接（ようせつ）の仕事 - SSW造船（ぞうせん）の道",
            simple: "溶接は、SSWの造船・舶用工業（はくようこうぎょう）の下で、日本の公式の仕事の分野です。造船所（ぞうせんしょ）の産業です。日本で溶接者として働くには、ClassNKが行う公式のSSW技能試験に合格しなければなりません。理論（りろん）と実際の溶接の部分があります。インドの溶接の証明書だけでは、この試験の代わりになりません。給料は正直に言います: 地域と会社で変わります。瀬戸内（せとうち）地域では、造船所の溶接者は普通、月に約230,000-250,000円から始まって、経験で上がります。",
            steps: [
              "道を選んでください: SSW - 試験に合格して働く。またはTITPの溶接 - 訓練の道。どちらも本当の政府の道です。",
              "SSWのため、まず日本語を作ってください - JLPT N4かJFT-Basicのレベル。",
              "ClassNKが行うSSW造船・舶用工業の技能試験に合格してください - 理論と実際の溶接。",
              "造船の会社に応募（おうぼ）して、面接に合格して、SSWの資格で来てください。",
              "未来を計画してください: 造船にはSSW-2があります。5年の制限なしに更新できて、家族が一緒に住めます。"
            ],
            traps: [
              "インドの溶接の証明書は、ClassNKのSSW試験の代わりになりません。証明書があるのはいいことです。試験はまだ必須（ひっす）です。",
              "証明書はビザではありません。試験、仕事、ビザは3つの別のステップです。",
              "エージェントの固定の給料の約束を信じないでください。造船所の給料は地域、会社、あなたの経験で変わります。"
            ]
          }
        },
        {
          id: "bsc-nursing-roadmap", section: "visas",
          keywords: "nursing bsc nursing nurse inc approved kaigo roadmap care worker degree नर्सिंग नर्स डिग्री केयर वर्कर रोडमैप कॉलेज 看護師 BSc 介護 INC ロードマップ",
          sources: [ { label: "Kaigo Fukushishi Exam Centre - sssc.or.jp", url: "https://www.sssc.or.jp/" }, { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/en/" } ],
          en: {
            title: "BSc Nursing Se Japan - The Roadmap",
            simple: "One brother asked: “My BSc Nursing college is not INC-approved. Can I still go to Japan?” The honest answer is YES - but the road changes. The licensed nurse route is hard: it needs Japan's national nursing exam in full Japanese, and Indian nursing registration can be a problem when the college is not INC-approved. The open door is Kaigo - care work - and this route needs NO nursing degree at all.",
            steps: [
              "Step 1 - Japanese: learn Japanese and pass JLPT N4 or JFT-Basic.",
              "Step 2 - Kaigo skill test: pass the care work skill test on Prometric. This test is also held in India.",
              "Step 3 - Job and visa: clear a Japanese company's interview and come to Japan as an SSW care worker.",
              "Step 4 - Experience: work in care in Japan and complete 3 years of care experience plus the required practical training.",
              "Step 5 - Kaigo Fukushishi exam: pass this national exam and change to the “Kaigo” status - renewable with no time limit, and your family can join you."
            ],
            traps: [
              "Do not waste time and money on the licensed nurse route without first checking your registration - without INC approval, registration itself can be the problem.",
              "Kaigo is care work, not a nursing job - understand the real work before you choose this road.",
              "The Kaigo Fukushishi exam is fully in Japanese - start your Japanese early, not in the last year."
            ]
          },
          hi: {
            title: "BSc Nursing से जापान - पूरा रोडमैप",
            simple: "एक भाई ने पूछा - “मेरा BSc Nursing कॉलेज INC-approved नहीं है। क्या मैं फिर भी जापान जा सकता हूँ?” सच्चा जवाब है - हाँ, लेकिन रास्ता बदल जाता है। लाइसेंस वाली नर्स वाला रास्ता कठिन है: उसके लिए जापान की राष्ट्रीय नर्सिंग परीक्षा पूरी जापानी में पास करनी होती है, और कॉलेज INC-approved न हो तो इंडिया की नर्सिंग रजिस्ट्रेशन में ही दिक्कत आ सकती है। खुला दरवाज़ा है Kaigo - केयर वर्क - और इस रास्ते में नर्सिंग डिग्री की ज़रूरत ही नहीं पड़ती।",
            steps: [
              "स्टेप 1 - जापानी: जापानी सीखें और JLPT N4 या JFT-Basic पास करें।",
              "स्टेप 2 - Kaigo स्किल टेस्ट: Prometric पर केयर वर्क का स्किल टेस्ट पास करें। यह टेस्ट इंडिया में भी होता है।",
              "स्टेप 3 - नौकरी और वीज़ा: जापानी कंपनी का इंटरव्यू पास करें और SSW केयर वर्कर बनकर जापान आएँ।",
              "स्टेप 4 - अनुभव: जापान में केयर में काम करके 3 साल का केयर अनुभव और ज़रूरी practical ट्रेनिंग पूरी करें।",
              "स्टेप 5 - Kaigo Fukushishi परीक्षा: यह राष्ट्रीय परीक्षा पास करें और “Kaigo” स्टेटस में बदलें - बिना समय-सीमा के रिन्यू होता है, और आपका परिवार भी साथ आ सकता है।"
            ],
            traps: [
              "अपनी रजिस्ट्रेशन जाँचे बिना लाइसेंस-नर्स वाले रास्ते पर समय और पैसा बर्बाद न करें - INC approval न हो, तो रजिस्ट्रेशन ही समस्या बन सकती है।",
              "Kaigo केयर वर्क है, नर्सिंग की नौकरी नहीं - यह रास्ता चुनने से पहले असली काम समझ लें।",
              "Kaigo Fukushishi परीक्षा पूरी जापानी में होती है - जापानी की शुरुआत आखिरी साल में नहीं, अभी से करें।"
            ]
          },
          ja: {
            title: "BSc Nursingから日本へ - ロードマップ",
            simple: "1人の兄弟が聞きました:「私のBSc Nursingの大学はINCの承認（しょうにん）がありません。それでも日本に行けますか？」正直な答えは、はい。でも道が変わります。免許（めんきょ）の看護師（かんごし）の道は難しいです。全部日本語の日本の国家試験が必要です。そして、大学がINCの承認がないとき、インドの看護師の登録（とうろく）が問題になることがあります。開いているドアは介護です。この道には看護の学位（がくい）は全くいりません。",
            steps: [
              "ステップ1 - 日本語: 日本語を学んで、JLPT N4かJFT-Basicに合格してください。",
              "ステップ2 - 介護の技能試験: Prometricで介護の技能試験に合格してください。この試験はインドでも開かれます。",
              "ステップ3 - 仕事とビザ: 日本の会社の面接に合格して、SSWの介護の働く人として日本に来てください。",
              "ステップ4 - 経験: 日本で介護で働いて、3年の介護の経験と、必要な実務の訓練を完成させてください。",
              "ステップ5 - 介護福祉士の試験: この国家試験に合格して、「介護」の資格に変えてください。時間の制限なしに更新できて、家族が一緒に住めます。"
            ],
            traps: [
              "まずあなたの登録を確認しないで、免許の看護師の道に時間とお金を無駄にしないでください。INCの承認がなければ、登録自体が問題になることがあります。",
              "介護は介護の仕事です。看護の仕事ではありません。この道を選ぶ前に、本当の仕事を理解してください。",
              "介護福祉士の試験は全部日本語です。日本語を早く始めてください。最後の年ではありません。"
            ]
          }
        },
        {
          id: "company-sach-1-what-companies-want", section: "jobs",
          keywords: "company sach part 1 hiring company what companies want japanese adaptability skill fourth valley connect job interview priority ranking naukri job कंपनी सच नौकरी इंटरव्यू जापानी स्किल कंपनी क्या देखती है हायरिंग 会社 採用 最初 日本語 スキル 順番",
          sources: [ { label: "Connect Job - Fourth Valley Concierge (the company interviewed) - connect-job.com", url: "https://www.connect-job.com/" } ],
          reel: "https://www.instagram.com/reel/DflFrK8hI1k/",
          en: {
            title: "Company Sach Part 1 - What Companies Want First",
            simple: "Shivam asked a real Japanese hiring company - Fourth Valley Concierge (Connect Job) - one question: when you hire a foreign worker, what do you look at first? Their ranking may surprise you. Number 1: Japanese language. Number 2: how well you adjust to their place and team. Number 3: your skill. Yes - skill is only third.",
            steps: [
              "Number 1 - Japanese language: improve it first. Study 20 minutes every day, without a gap. Small daily Japanese beats one big study day.",
              "Number 2 - Adjusting (fitting in): learn the Japanese work style - come on time, report your work to your senior, and move with the team. In Japan this is not a 'soft' thing - it is a hard requirement.",
              "Number 3 - Skill: build your skill too, but after the first two. Without language, nobody can even see your skill.",
              "Improve in this same order: language first, fitting-in second, skill third."
            ],
            traps: [
              "A certificate kept in a file is useless if your Japanese is zero - the file stays closed. Language opens the door.",
              "Do not think 'my skill is strong, so Japanese is not needed.' The company itself put skill at number 3."
            ]
          },
          hi: {
            title: "Company Sach Part 1 - कंपनी सबसे पहले क्या देखती है?",
            simple: "शिवम ने एक असली जापानी hiring कंपनी - Fourth Valley Concierge (Connect Job) - से एक सवाल पूछा: विदेशी वर्कर को रखते समय आप सबसे पहले क्या देखते हैं? उनका क्रम आपको चौंका सकता है। नंबर 1: जापानी भाषा। नंबर 2: आप उनकी जगह और टीम में कितनी अच्छी तरह adjust होते हैं। नंबर 3: आपकी स्किल। जी हाँ - स्किल सिर्फ़ तीसरे नंबर पर है।",
            steps: [
              "नंबर 1 - जापानी भाषा: इसे सबसे पहले सुधारें। रोज़ 20 मिनट पढ़ें, बिना gap के। रोज़ की छोटी पढ़ाई, एक बड़े दिन की पढ़ाई से बेहतर है।",
              "नंबर 2 - Adjust होना (टीम में घुलना): जापानी काम का तरीका सीखें - समय पर आएँ, अपने सीनियर को काम की report दें, और टीम के साथ चलें। जापान में यह 'soft' बात नहीं है - यह सबसे कड़ी ज़रूरत है।",
              "नंबर 3 - स्किल: अपनी स्किल भी बनाएँ, लेकिन पहले दो के बाद। भाषा न हो, तो आपकी स्किल कोई देख ही नहीं पाएगा।",
              "सुधार भी इसी क्रम में करें: पहले भाषा, फिर adjust होना, फिर स्किल।"
            ],
            traps: [
              "सर्टिफ़िकेट फ़ाइल में रखा है और जापानी zero है - तो फ़ाइल बंद ही रहेगी। भाषा ही दरवाज़ा खोलती है।",
              "यह न सोचें - 'मेरी स्किल मज़बूत है, इसलिए जापानी ज़रूरी नहीं।' कंपनी ने ख़ुद स्किल को नंबर 3 पर रखा है।"
            ]
          },
          ja: {
            title: "Company Sach パート1 - 会社が最初に見ること",
            simple: "Shivamは本当の日本の採用会社 - Fourth Valley Concierge（Connect Job）- に1つの質問をしました: 外国人の働く人を雇うとき、最初に何を見ますか？その順番は驚くかもしれません。1番: 日本語。2番: あなたがその場所とチームにどれだけ合うか。3番: あなたのスキル。はい - スキルは3番だけです。",
            steps: [
              "1番 - 日本語: まずこれを上げてください。毎日20分、休みなしで勉強してください。小さい毎日の日本語が、1つの大きい勉強の日に勝ちます。",
              "2番 - 合うこと（チームに入ること）: 日本の仕事のスタイルを学んでください - 時間に来る、仕事を先輩（せんぱい）に報告する、チームと一緒に動く。日本では、これは「やわらかい」ことではありません。硬い要件（ようけん）です。",
              "3番 - スキル: スキルも作ってください。でも最初の2つの後です。言葉がなければ、誰もあなたのスキルを見ることさえできません。",
              "同じ順番で上げてください: 言葉が1番、合うことが2番、スキルが3番。"
            ],
            traps: [
              "ファイルの中の証明書は、あなたの日本語がゼロなら役に立ちません。ファイルは閉じたままです。言葉がドアを開けます。",
              "「私のスキルは強いから、日本語はいらない」と考えないでください。会社自体がスキルを3番に置きました。"
            ]
          }
        },
        {
          id: "company-sach-2-n4-n3-n2", section: "jobs",
          keywords: "company sach part 2 n4 n3 n2 jlpt jft visa naukri job engineer visa gijinkoku japanese level कंपनी सच वीज़ा नौकरी जापानी लेवल इंजीनियर वीज़ा N4 N3 N2 ビザ 仕事 エンジニア JLPT",
          sources: [ { label: "Connect Job - Fourth Valley Concierge (the company interviewed) - connect-job.com", url: "https://www.connect-job.com/" }, { label: "JLPT Official Website - jlpt.jp", url: "https://www.jlpt.jp/e/" } ],
          reel: "https://www.instagram.com/reel/DfnkDLlT1gz/",
          en: {
            title: "Company Sach Part 2 - N4 = Visa, N3 = Job, N2 = Engineer Visa",
            simple: "How much Japanese do you really need? The same hiring company (Fourth Valley Concierge - Connect Job) answered clearly: for SSW, N4 can get you the visa - but N4 holders are in thousands all over the world. An N3 candidate becomes the company's first choice. And for an Engineer visa, you need N2 - below that, the chance is very low.",
            steps: [
              "N4 - the visa line: with N4 or JFT-Basic, your SSW visa can be made. But this is the starting line, not the finish line.",
              "N3 - the job line: companies prefer N3. If two candidates are equal, the N3 candidate is picked first.",
              "N2 - the Engineer visa line: for the Engineer / Specialist visa (Gijinkoku), aim for N2 or above.",
              "Reach N3, step 1: read one small Japanese passage every day, with a timer. Reading is where most people fall.",
              "Reach N3, step 2: learn words inside sentences, not alone. A word alone is forgotten; a word in a sentence stays.",
              "Reach N3, step 3: take one mock test every week, and write your mistakes in a list. That mistake list is your real book."
            ],
            traps: [
              "Do not stop at N4 and relax. N4 gives the paper - the job comes from the language above it.",
              "Only collecting certificates does not impress a company. What you can actually speak and read is what counts."
            ]
          },
          hi: {
            title: "Company Sach Part 2 - N4 = वीज़ा, N3 = नौकरी, N2 = Engineer वीज़ा",
            simple: "असल में कितनी जापानी चाहिए? उसी hiring कंपनी (Fourth Valley Concierge - Connect Job) ने साफ़ जवाब दिया: SSW के लिए N4 से वीज़ा बन जाता है - लेकिन N4 वाले पूरी दुनिया में हज़ारों हैं। N3 वाला candidate कंपनी की पहली पसंद बनता है। और Engineer वीज़ा चाहिए, तो N2 चाहिए - उससे नीचे chance बहुत कम है।",
            steps: [
              "N4 - वीज़ा वाली लाइन: N4 या JFT-Basic से आपका SSW वीज़ा बन सकता है। लेकिन यह starting line है, finish line नहीं।",
              "N3 - नौकरी वाली लाइन: कंपनियाँ N3 को पसंद करती हैं। दो candidate बराबर हों, तो N3 वाला पहले चुना जाता है।",
              "N2 - Engineer वीज़ा वाली लाइन: Engineer / Specialist वीज़ा (Gijinkoku) के लिए N2 या उससे ऊपर का लक्ष्य रखें।",
              "N3 तक पहुँचें, स्टेप 1: रोज़ एक छोटा जापानी passage समय लगाकर पढ़ें। Reading में ही सबसे ज़्यादा लोग गिरते हैं।",
              "N3 तक पहुँचें, स्टेप 2: शब्दों को अकेले नहीं, वाक्य के अंदर याद करें। अकेला शब्द भूल जाता है; वाक्य वाला शब्द टिकता है।",
              "N3 तक पहुँचें, स्टेप 3: हर हफ़्ते एक mock test दें, और अपनी ग़लतियों की list बनाएँ। वही list आपकी असली किताब है।"
            ],
            traps: [
              "N4 पर रुककर आराम न करें। N4 काग़ज़ देता है - नौकरी उससे ऊपर वाली भाषा से मिलती है।",
              "सिर्फ़ सर्टिफ़िकेट जमा करने से कंपनी प्रभावित नहीं होती। असल में आप कितना बोल और पढ़ सकते हैं - वही मायने रखता है।"
            ]
          },
          ja: {
            title: "Company Sach パート2 - N4=ビザ、N3=仕事、N2=エンジニアビザ",
            simple: "どれだけの日本語が本当に必要ですか？同じ採用会社（Fourth Valley Concierge - Connect Job）がはっきり答えました: SSWのため、N4でビザはもらえます。でもN4の人は世界中に何千人もいます。N3の候補者が会社の1番の選択になります。そしてエンジニアビザにはN2が必要です。それより下では、チャンスはとても低いです。",
            steps: [
              "N4 - ビザのライン: N4かJFT-Basicで、あなたのSSWのビザは作れます。でもこれはスタートのラインです。ゴールのラインではありません。",
              "N3 - 仕事のライン: 会社はN3を好みます。2人の候補者が同じなら、N3の候補者が最初に選ばれます。",
              "N2 - エンジニアビザのライン: エンジニア/専門家のビザ（技人国（ぎじんこく））のため、N2以上を目指してください。",
              "N3に届く、ステップ1: 毎日1つの小さい日本語の文章を、タイマーで読んでください。読みは、ほとんどの人が落ちる場所です。",
              "N3に届く、ステップ2: 言葉を文の中で学んでください。1人ではありません。1人で覚えた言葉は忘れます。文の中の言葉は残ります。",
              "N3に届く、ステップ3: 毎週1回、模擬試験（もぎしけん）を受けて、あなたのまちがいをリストに書いてください。そのまちがいのリストが、あなたの本当の本です。"
            ],
            traps: [
              "N4で止まって安心しないでください。N4は紙をくれます。仕事は、その上の言葉から来ます。",
              "証明書を集めるだけでは、会社は感心（かんしん）しません。あなたが本当に話せて読めるものが大切です。"
            ]
          }
        },
        {
          id: "company-sach-3-interview-mistakes", section: "jobs",
          keywords: "company sach part 3 interview mistakes reject indian candidates listening overselling fast speaking interrupt कंपनी सच इंटरव्यू ग़लती ग़लतियाँ रिजेक्ट सुनना तेज़ बोलना 面接 まちがい 聞く 話す 落ちる",
          sources: [ { label: "Connect Job - Fourth Valley Concierge (the company interviewed) - connect-job.com", url: "https://www.connect-job.com/" } ],
          reel: "https://www.instagram.com/reel/Dfr4J6vvTXs/",
          en: {
            title: "Company Sach Part 3 - 3 Interview Mistakes That Get You Rejected",
            simple: "Why do Indian candidates get rejected in interviews? A Japanese hiring company (Fourth Valley Concierge - Connect Job) named 3 mistakes from their own daily interviews. Mistake 1: not listening. Mistake 2: talking long, only about yourself. Mistake 3: speaking fast and cutting the other person's words. The reason is usually not your skill.",
            steps: [
              "Fix 1 - the 2-second rule: when the other person stops speaking, wait 2 seconds, then speak. This one habit stops most interrupting.",
              "Fix 2 - answer in one line first: give the short answer first. Give details only when they ask for them.",
              "Fix 3 - record yourself: record your voice on your phone and listen to it. If you speak fast, you will hear it yourself - then slow down.",
              "Remember what the interview is really testing: 'Will this person work peacefully inside our team?' Calm and clear wins."
            ],
            traps: [
              "Overselling - talking big about yourself - works against you in Japan. Let your work and your documents speak.",
              "Interrupting the interviewer, even once, can finish your chance. Listen fully, then answer."
            ]
          },
          hi: {
            title: "Company Sach Part 3 - इंटरव्यू की 3 ग़लतियाँ = Reject",
            simple: "भारतीय candidate इंटरव्यू में reject क्यों होते हैं? एक जापानी hiring कंपनी (Fourth Valley Concierge - Connect Job) ने अपने रोज़ के इंटरव्यू से 3 ग़लतियाँ गिनाईं। ग़लती 1: सुनते ही नहीं। ग़लती 2: लंबा बोलना, सिर्फ़ अपनी ही बात करना। ग़लती 3: तेज़ बोलना और सामने वाले की बात काट देना। वजह आमतौर पर आपकी स्किल नहीं होती।",
            steps: [
              "Fix 1 - 2-second नियम: सामने वाला बोलना बंद करे, तो 2 second रुकें, फिर बोलें। यही एक आदत ज़्यादातर बात काटने को रोक देती है।",
              "Fix 2 - पहले जवाब एक line में: पहले छोटा जवाब दें। Detail तभी दें, जब वे पूछें।",
              "Fix 3 - ख़ुद को record करें: फोन पर अपनी आवाज़ record करके सुनें। तेज़ बोलते हैं, तो ख़ुद सुनाई देगा - फिर धीमे हो जाएँ।",
              "याद रखें, इंटरव्यू असल में यह test करता है: 'क्या यह इंसान हमारी टीम में शांति से काम करेगा?' शांत और साफ़ जवाब जीतता है।"
            ],
            traps: [
              "Overselling - अपने बारे में बड़ी-बड़ी बातें - जापान में आपके ख़िलाफ़ जाता है। अपने काम और अपने काग़ज़ों को बोलने दें।",
              "Interviewer की बात एक बार भी काटना आपका chance ख़त्म कर सकता है। पूरी बात सुनें, फिर जवाब दें।"
            ]
          },
          ja: {
            title: "Company Sach パート3 - 落ちる3つの面接のまちがい",
            simple: "インドの候補者はなぜ面接で落ちますか？日本の採用会社（Fourth Valley Concierge - Connect Job）が、自分たちの毎日の面接から3つのまちがいを名前で言いました。まちがい1: 聞かないこと。まちがい2: 長く話すこと、自分についてだけ。まちがい3: 早く話して、相手の言葉を切ること。理由は普通、あなたのスキルではありません。",
            steps: [
              "直し方1 - 2秒のルール: 相手が話し終わったら、2秒待って、それから話してください。この1つの習慣（しゅうかん）が、ほとんどの割り込み（わりこみ）を止めます。",
              "直し方2 - 最初に1行で答える: 最初に短い答えをください。詳しいことは、聞かれたときだけください。",
              "直し方3 - 自分を録音（ろくおん）する: 電話であなたの声を録音して、聞いてください。早く話すなら、自分で聞こえます。それからゆっくりにしてください。",
              "面接が本当にテストしていることを覚えてください:「この人は私たちのチームの中で平和に働けますか？」落ち着いて、はっきりが勝ちます。"
            ],
            traps: [
              "売り込みすぎ - 自分について大きく話すこと - は、日本ではあなたに反対に働きます。あなたの仕事と書類に話させてください。",
              "面接の人の言葉を切ることは、1回でも、あなたのチャンスを終わらせることがあります。全部聞いて、それから答えてください。"
            ]
          }
        },
        {
          id: "company-sach-4-apply-to-offer", section: "jobs",
          keywords: "company sach part 4 apply offer process document screening resume rirekisho interview support company कंपनी सच अप्लाई ऑफ़र प्रोसेस दस्तावेज़ स्क्रीनिंग रिज़्यूमे 申し込み オファー 書類 審査 履歴書 流れ",
          sources: [ { label: "Connect Job - Fourth Valley Concierge (the company interviewed) - connect-job.com", url: "https://www.connect-job.com/" } ],
          reel: "https://www.instagram.com/reel/DfubZFcO5gE/",
          en: {
            title: "Company Sach Part 4 - Apply to Offer: The Full Process",
            simple: "Japan's job process is not like India's. The hiring company (Fourth Valley Concierge - Connect Job) explained it simply: there are mainly 2 steps - first document screening, then the interview. The dangerous part: the first step can reject you without ever meeting you. That is why your documents are everything.",
            steps: [
              "Step 1 - Document screening: the company checks your papers first. A clean and true Japanese-style resume (rirekisho) is a must.",
              "Do not hide empty time in your resume - explain it simply and truly. A hidden gap that opens up later destroys trust.",
              "Keep your documents ready before you apply: JLPT or JFT result, skill test result, and passport.",
              "Step 2 - Interview: if your papers pass, the interview comes. Read Part 3 for the 3 mistakes to avoid.",
              "Use a good support company: a real support company helps with interview practice, the visa, and life support after you reach Japan - this help is part of their job.",
              "Do not stop at one company - but apply properly each time, with full and true documents."
            ],
            traps: [
              "In Japan, a slow process does not always mean 'no'. Every company takes its own time - do not panic, and do not pay anyone to 'speed it up'.",
              "One false paper or one false line in the resume can end everything - in screening, or even after joining."
            ]
          },
          hi: {
            title: "Company Sach Part 4 - Apply से Offer तक: पूरा Process",
            simple: "जापान का नौकरी process इंडिया जैसा नहीं है। Hiring कंपनी (Fourth Valley Concierge - Connect Job) ने आसान शब्दों में समझाया: मुख्य रूप से 2 step हैं - पहले documents की छानबीन (screening), फिर इंटरव्यू। ख़तरनाक बात यह है: पहला step आपको बिना मिले ही बाहर कर सकता है। इसीलिए आपके documents ही सब कुछ हैं।",
            steps: [
              "Step 1 - Document screening: कंपनी पहले आपके काग़ज़ देखती है। साफ़ और सच्चा जापानी-स्टाइल resume (rirekisho) ज़रूरी है।",
              "Resume में ख़ाली समय न छिपाएँ - उसे आसान और सच्चे शब्दों में समझाएँ। छिपाया हुआ gap बाद में खुले, तो भरोसा ख़त्म हो जाता है।",
              "Apply करने से पहले documents तैयार रखें: JLPT या JFT का result, skill test का result, और passport।",
              "Step 2 - Interview: काग़ज़ पास हों, तो इंटरव्यू आता है। बचने वाली 3 ग़लतियों के लिए Part 3 पढ़ें।",
              "एक अच्छी support कंपनी का साथ लें: असली support कंपनी इंटरव्यू की practice, वीज़ा, और जापान पहुँचने के बाद life support में मदद करती है - यह मदद उनके काम का हिस्सा है।",
              "एक ही कंपनी पर न रुकें - लेकिन हर बार पूरे और सच्चे documents के साथ ठीक से apply करें।"
            ],
            traps: [
              "जापान में धीमा process हमेशा 'ना' नहीं होता। हर कंपनी अपना समय लेती है - घबराएँ नहीं, और process 'तेज़' कराने के लिए किसी को पैसे न दें।",
              "एक झूठा काग़ज़ या resume की एक झूठी line सब कुछ ख़त्म कर सकती है - screening में, या join करने के बाद भी।"
            ]
          },
          ja: {
            title: "Company Sach パート4 - 申し込みからオファーまで: 全部の流れ",
            simple: "日本の仕事の流れはインドとちがいます。採用会社（Fourth Valley Concierge - Connect Job）が簡単に説明しました: 主に2つのステップがあります。最初に書類の審査（しんさ）、それから面接。危ない部分: 最初のステップは、あなたに会わずにあなたを落とすことがあります。だからあなたの書類が全部です。",
            steps: [
              "ステップ1 - 書類の審査: 会社は最初にあなたの紙を確認します。きれいで本当の日本スタイルの履歴書（りれきしょ）が必須です。",
              "履歴書の空いた時間を隠さないでください。簡単に、本当に説明してください。後で開く隠した空白（くうはく）は、信頼（しんらい）を壊します。",
              "申し込む前に書類を準備してください: JLPTかJFTの結果、技能試験の結果、パスポート。",
              "ステップ2 - 面接: あなたの紙が合格したら、面接が来ます。避ける3つのまちがいはパート3を読んでください。",
              "いい支援会社を使ってください: 本当の支援会社は、面接の練習、ビザ、日本に着いた後の生活の支援を手伝います。この助けは彼らの仕事の一部です。",
              "1つの会社で止まらないでください。でも毎回正しく、全部の本当の書類で申し込んでください。"
            ],
            traps: [
              "日本では、遅い流れはいつも「ダメ」という意味ではありません。会社ごとに自分の時間がかかります。慌（あわ）てないでください。「早くする」ためにお金を払わないでください。",
              "1つのウソの紙、履歴書の1つのウソの行が、全部を終わらせることがあります。審査でも、入った後でも。"
            ]
          }
        },
        {
          id: "company-sach-5-one-advice", section: "jobs",
          keywords: "company sach part 5 one advice japanese six month plan 6 months learn japanese कंपनी सच सलाह जापानी छह महीने प्लान सीखें アドバイス 計画 6ヶ月 日本語 毎日",
          sources: [ { label: "Connect Job - Fourth Valley Concierge (the company interviewed) - connect-job.com", url: "https://www.connect-job.com/" } ],
          reel: "https://www.instagram.com/reel/Dfw8zR0p6nH/",
          en: {
            title: "Company Sach Part 5 - The Company's One Advice + 6-Month Plan",
            simple: "Last question to the company (Fourth Valley Concierge - Connect Job): 'Give Indian candidates one advice.' They did not say skill. They did not say a course. They said one word: Japanese. Their words: the more Japanese you have, the more the benefit - in work, and in daily life in Japan. At the station, in the hospital, in the office - if you have the language, Japan is yours.",
            steps: [
              "Months 1–2: 20 minutes every day - words and basic grammar. No gap days.",
              "Months 3–4: start reading small passages and listening every day - move toward N3.",
              "Months 5–6: one mock test every week, and speaking practice - the Japanese you need in interviews.",
              "Keep it daily and small. This one habit will put you ahead of thousands of candidates in India."
            ],
            traps: [
              "Do not wait for a 'perfect time' to start Japanese. The company said it plainly: language is the job, and language is life in Japan.",
              "A costly course alone is not the answer - daily practice is. Free classes near your home also exist - see the FREE Japanese Classes guide."
            ]
          },
          hi: {
            title: "Company Sach Part 5 - कंपनी की एक सलाह + 6 महीने का Plan",
            simple: "कंपनी (Fourth Valley Concierge - Connect Job) से आख़िरी सवाल: 'भारतीय candidates को एक सलाह दीजिए।' उन्होंने स्किल नहीं कहा। Course नहीं कहा। एक शब्द कहा: जापानी। उनके शब्द: जितनी ज़्यादा जापानी, उतना फ़ायदा - काम में भी, और जापान की रोज़ की ज़िंदगी में भी। स्टेशन पर, अस्पताल में, ऑफ़िस में - भाषा है, तो जापान आपका है।",
            steps: [
              "महीना 1–2: रोज़ 20 मिनट - शब्द और basic grammar। Gap वाला दिन नहीं।",
              "महीना 3–4: रोज़ छोटे passages पढ़ना और सुनना शुरू करें - N3 की तरफ़ बढ़ें।",
              "महीना 5–6: हर हफ़्ते एक mock test, और बोलने की practice - इंटरव्यू में काम आने वाली जापानी।",
              "रोज़ करें, छोटा करें। यही एक आदत आपको इंडिया के हज़ारों candidates से आगे खड़ा कर देगी।"
            ],
            traps: [
              "जापानी शुरू करने के लिए 'perfect time' का इंतज़ार न करें। कंपनी ने साफ़ कहा: भाषा ही नौकरी है, और भाषा ही जापान में ज़िंदगी है।",
              "महँगा course अकेले जवाब नहीं है - रोज़ की practice जवाब है। आपके घर के पास FREE क्लास भी होती हैं - FREE Japanese Classes वाली गाइड देखें।"
            ]
          },
          ja: {
            title: "Company Sach パート5 - 会社の1つのアドバイス + 6ヶ月の計画",
            simple: "会社への最後の質問（Fourth Valley Concierge - Connect Job）:「インドの候補者に1つのアドバイスをください。」彼らはスキルと言いませんでした。コースとも言いませんでした。1つの言葉を言いました: 日本語。彼らの言葉: 日本語が多ければ多いほど、得（とく）が多い。仕事でも、日本の毎日の生活でも。駅で、病院で、事務所で。言葉があれば、日本はあなたのものです。",
            steps: [
              "1-2ヶ月: 毎日20分 - 言葉と基本の文法。休みの日なし。",
              "3-4ヶ月: 小さい文章を読むことと、毎日聞くことを始めてください。N3へ向かってください。",
              "5-6ヶ月: 毎週1回の模擬試験と、話す練習 - 面接で必要な日本語。",
              "毎日、小さく続けてください。この1つの習慣が、インドの何千人もの候補者の前にあなたを置きます。"
            ],
            traps: [
              "日本語を始める「完璧（かんぺき）な時間」を待たないでください。会社ははっきり言いました: 言葉が仕事で、言葉が日本での生活です。",
              "高いコースだけが答えではありません。毎日の練習が答えです。家の近くの無料の教室もあります。無料の日本語教室のガイドを見てください。"
            ]
          }
        },
        {
          id: "work-without-ssw", section: "jobs",
          keywords: "work without ssw direct apply direct job engineer visa gijinkoku degree n2 coe job offer titp working holiday ikusei shuro skilled labor chef बिना एसएसडब्ल्यू डायरेक्ट अप्लाई नौकरी डिग्री इंजीनियर वीज़ा 直接 申し込み 学位 N2 COE ワーキングホリデー 技能",
          sources: [ { label: "Immigration Services Agency (ISA) - moj.go.jp", url: "https://www.moj.go.jp/isa/applications/status/gijinkoku.html" } ],
          en: {
            title: "Japan Work Without SSW — Can You Apply Directly?",
            simple: "Can you apply directly to a Japanese company and work in Japan without SSW? Yes — but only if you qualify for a different visa on your own. A job offer is not a visa. First ask yourself 4 questions: Do you have a university degree? Did you graduate in Japan? Do you have family or a status-based residence in Japan? Have you passed SSW tests? If all four answers are 'no', there is no general full-time direct route — only TITP through official organisations, or a visa based on long real experience.",
            steps: [
              "Degree + N2: with a degree and Japanese N2, you can apply directly to companies for the Engineer visa. Two conditions: the job must match your degree, and the company must sponsor your visa (it files the COE in Japan). N2 is what companies ask for in practice — it is not a law that says 'N2 or nothing'.",
              "No degree, 10 years of real experience: a skilled craft can qualify. For example, an Indian-cuisine chef with 10 years of provable cooking experience can be hired directly under Skilled Labor. Factory-line, shop, cleaning or general labour work does not qualify this way.",
              "TITP is not direct apply: it must go through an NSDC-empanelled Sending Organisation in India and a licensed Supervising Organisation in Japan. Anyone who says 'direct TITP, just pay me' is not describing the official route.",
              "Working Holiday is not for India: India is not on Japan's Working Holiday partner list. Ikusei Shuro, the new system replacing TITP, starts 1 April 2027 — and India being included is not confirmed yet.",
              "Remember the order: job offer first, then the company files for a COE in Japan (usually 1–3 months, ISA charges no fee), then you apply for the visa in India. Offer is not a visa, and a visa is not entry permission.",
              "Never pay a deposit and never sign a penalty contract — both are banned. A real sending organisation is on the NSDC / OTIT lists, and its fees are itemised in writing before you pay anything."
            ],
            traps: [
              "A company or agent promising a 'direct general job' to someone with no degree, no Japan graduation, no family status and no SSW pass is promising something the official system does not provide.",
              "Do not enter as a tourist and try to start work. A tourist visa does not allow paid work, and no agent can 'convert' it into a work visa."
            ]
          },
          hi: {
            title: "SSW के बिना जापान में काम — क्या Direct Apply हो सकता है?",
            simple: "क्या आप SSW के बिना जापानी कंपनी को direct apply करके जापान में काम कर सकते हैं? हाँ — लेकिन सिर्फ़ तब, जब आप अपने दम पर किसी दूसरे वीज़ा के लिए eligible हों। Job offer ही वीज़ा नहीं होता। पहले खुद से 4 सवाल पूछें: क्या आपके पास university degree है? क्या आपने जापान से graduation किया है? क्या जापान में आपका family या status वाला residence है? क्या आपने SSW test पास किया है? चारों का जवाब 'नहीं' है, तो कोई आम full-time direct रास्ता नहीं है — सिर्फ़ TITP, official organisations के through, या लंबे असली experience वाला वीज़ा।",
            steps: [
              "Degree + N2: degree और जापानी N2 हो, तो Engineer वीज़ा के लिए companies को direct apply कर सकते हैं। दो शर्तें: job आपकी degree से match करे, और company आपका वीज़ा sponsor करे (COE वह जापान में file करती है)। N2 कंपनियों की practical माँग है — यह कानून नहीं है कि 'N2 हो, तो ही'।",
              "Degree नहीं, 10 साल का असली experience: कोई skilled काम qualify कर सकता है। जैसे, 10 साल के provable cooking experience वाला Indian-cuisine chef सीधे Skilled Labor में hire हो सकता है। Factory-line, दुकान, सफ़ाई या आम मज़दूरी का काम इस तरह qualify नहीं करता।",
              "TITP direct apply नहीं होता: इसमें भारत की NSDC-empanelled Sending Organisation और जापान की licensed Supervising Organisation से गुज़रना पड़ता है। जो 'direct TITP, बस पैसे दो' कहे, वह official रास्ता नहीं बता रहा।",
              "Working Holiday भारत के लिए नहीं है: भारत जापान की Working Holiday partner list में नहीं है। TITP की जगह आने वाला नया सिस्टम Ikusei Shuro 1 अप्रैल 2027 से शुरू होगा — और भारत उसमें शामिल होगा या नहीं, यह अभी confirm नहीं है।",
              "क्रम याद रखें: पहले job offer, फिर company जापान में COE file करती है (आमतौर पर 1–3 महीने, ISA कोई fee नहीं लेता), फिर आप भारत में वीज़ा के लिए apply करते हैं। Offer वीज़ा नहीं है, और वीज़ा ही entry की permission नहीं है।",
              "कभी deposit न दें और कभी penalty वाला contract न sign करें — दोनों banned हैं। असली sending organisation NSDC / OTIT की list में होती है, और उसकी fees पैसे देने से पहले लिखित में item-wise बताई जाती हैं।"
            ],
            traps: [
              "जिसके पास degree नहीं, जापान से graduation नहीं, family status नहीं और SSW pass भी नहीं — उसे 'direct general job' देने का वादा करने वाला company या agent वह चीज़ दे रहा है, जो official सिस्टम में है ही नहीं।",
              "Tourist बनकर आकर काम शुरू करने की कोशिश न करें। Tourist वीज़ा पर पैसे वाला काम allowed नहीं है, और कोई agent उसे work वीज़ा में 'convert' नहीं कर सकता।"
            ]
          },
          ja: {
            title: "SSWなしで日本の仕事 - 直接申し込めますか？",
            simple: "日本の会社に直接申し込んで、SSWなしで日本で働けますか？はい。でも、あなたが自分で別のビザの資格があるときだけです。仕事のオファーはビザではありません。まず自分に4つの質問をしてください: 大学の学位がありますか？日本で卒業しましたか？日本に家族や資格による在留がありますか？SSWの試験に合格しましたか？4つ全部「いいえ」なら、一般のフルタイムの直接の道はありません。公式の機関を通るTITPだけ、または長い本当の経験によるビザだけです。",
            steps: [
              "学位 + N2: 学位と日本語N2があれば、エンジニアビザのため会社に直接申し込めます。条件は2つ: 仕事があなたの学位と合うこと、会社があなたのビザをスポンサーすること（会社が日本でCOEを申請します）。N2は会社が実際に求めるものです。「N2かゼロか」という法律ではありません。",
              "学位なし、10年の本当の経験: 熟練（じゅくれん）の技術が資格になることがあります。例えば、証明できる10年の料理の経験があるインド料理のシェフは、技能（ぎのう）の下で直接雇われます。工場のライン、店、掃除（そうじ）、一般の労働の仕事は、この方法では資格になりません。",
              "TITPは直接の申し込みではありません: インドのNSDC認定（にんてい）の送出機関（そうしゅつきかん）と、日本の免許のある監理団体を通らなければなりません。「直接のTITP、お金だけ払って」と言う人は、公式の道を説明していません。",
              "ワーキングホリデーはインドのためではありません: インドは日本のワーキングホリデーのパートナーのリストにありません。育成就労 - TITPの代わりの新しい制度 - は2027年4月1日に始まります。インドが含まれるかは、まだ確認されていません。",
              "順番を覚えてください: 最初に仕事のオファー、それから会社が日本でCOEを申請（普通1-3ヶ月、ISAの料金はありません）、それからあなたがインドでビザを申請します。オファーはビザではありません。ビザは入国の許可ではありません。",
              "デポジットを絶対に払わないでください。罰金の契約に絶対にサインしないでください。どちらも禁止です。本当の送出機関はNSDC/OTITのリストにあります。その料金は、あなたが何か払う前に、書面（しょめん）で明細があります。"
            ],
            traps: [
              "学位なし、日本の卒業なし、家族の資格なし、SSWの合格なしの人に「直接の一般の仕事」を約束する会社やエージェントは、公式の制度がないものを約束しています。",
              "観光で入って、仕事を始めようとしないでください。観光ビザはお金をもらう仕事を許可しません。エージェントはそれを仕事のビザに「変える」ことはできません。"
            ]
          }
        },
                {
          id: "apply-job-from-india", section: "jobs",
          keywords: "apply job from india overseas guidable yolo work matching event coe india se naukri apply विदेश से नौकरी आवेदन जापान जॉब インドから 申し込み 仕事 海外 マッチング",
          sources: [ { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/" }, { label: "YOLO WORK - work.yolo-japan.com", url: "https://work.yolo-japan.com/" } ],
          en: {
            title: "Applying for a Job in Japan — From India",
            simple: "You are in India and want a job in Japan. This is your exact road, step by step. Remember the biggest rule first: applying is always FREE. Nobody can charge you money for a job.",
            steps: [
              "First, pass 2 tests — a Japanese test (JLPT N4 or JFT-Basic) and the SSW skill test of your field. Both tests also happen in India, on Prometric. Without these 2, no company can hire you for SSW.",
              "Make your 2 Japanese resumes — Rirekisho and Shokumu Keirekisho. Free filled samples are in the 'Resume Samples' guide on this website.",
              "Apply FREE on Guidable Jobs and YOLO WORK. Read every post carefully — apply only where it clearly says India / overseas applicants are OK. Most posts are for people already living in Japan.",
              "Watch for government online matching events on the SSW portal — some events let candidates join from India online.",
              "The interview is online. Speak slowly and listen fully — read the 'Interview Mistakes' guide (Company Sach Part 3) before it.",
              "Got an offer? A job offer is NOT a visa. The company applies for your COE in Japan (about 1–3 months, and there is no COE fee), then you apply for the visa in India.",
              "TITP is different: it never goes by direct apply. It runs only through an NSDC-listed Sending Organisation in India and a licensed Supervising Organisation in Japan — see the 'Japan Work Without SSW' guide.",
              "Keep first-month money ready: salary usually comes on the 25th of the next month, so keep about ₹55–60 thousand (around ¥1 lakh) with you for food, train and daily costs after you land."
            ],
            traps: [
              "Never pay for a job. There is no job fee and no COE charge for candidates — anyone asking money for a job is not the official route.",
              "Do not waste time on posts that need you to already live in Japan — read the post's conditions first.",
              "Never pay a deposit and never sign a penalty paper — both are banned."
            ]
          },
          hi: {
            title: "India से Japan की नौकरी के लिए Apply — Step by Step",
            simple: "आप India में हैं और Japan में नौकरी चाहते हैं। ये रहा आपका पूरा रास्ता, step by step। सबसे बड़ा नियम पहले याद रखें: apply करना हमेशा FREE है। नौकरी के लिए कोई आपसे पैसा नहीं ले सकता।",
            steps: [
              "पहले 2 test pass करें — Japanese test (JLPT N4 या JFT-Basic) और अपने field का SSW skill test। दोनों test India में भी होते हैं (Prometric)। इन 2 के बिना कोई company आपको SSW पर रख ही नहीं सकती।",
              "अपने 2 Japanese resume बनाएँ — Rirekisho और Shokumu Keirekisho। भरे हुए free samples इस website की 'Resume Samples' guide में हैं।",
              "Guidable Jobs और YOLO WORK पर FREE apply करें। हर post ध्यान से पढ़ें — सिर्फ़ वहीं apply करें जहाँ साफ़ लिखा हो कि India / विदेश से apply OK है। ज़्यादातर posts Japan में पहले से रहने वालों के लिए होते हैं।",
              "Government के online matching events पर नज़र रखें (SSW portal) — कुछ events में India से online जुड़ सकते हैं।",
              "Interview online होगा। धीरे बोलें, पूरी बात सुनें — उससे पहले 'Interview Mistakes' guide (Company Sach Part 3) ज़रूर पढ़ें।",
              "Offer मिल गया? Job offer वीज़ा नहीं होता। Company Japan में आपका COE apply करेगी (लगभग 1–3 महीने, COE की कोई fee नहीं), फिर आप India में वीज़ा apply करेंगे।",
              "TITP अलग है: इसमें direct apply कभी नहीं होता। ये सिर्फ़ India की NSDC-listed Sending Organisation और Japan की licensed Supervising Organisation से चलता है ('Japan Work Without SSW' guide देखें)।",
              "पहले महीने का पैसा तैयार रखें: salary आम तौर पर अगले महीने की 25 तारीख़ को आती है, इसलिए Japan पहुँचने के बाद खाने, train और रोज़ के ख़र्च के लिए लगभग ₹55–60 हज़ार (करीब ¥1 lakh) साथ रखें।"
            ],
            traps: [
              "नौकरी के लिए कभी पैसा न दें। Candidate के लिए न job fee है, न COE charge — जो नौकरी के लिए पैसा माँगे, वो official रास्ता नहीं है।",
              "जिन posts के लिए Japan में पहले से रहना ज़रूरी है, उन पर समय बर्बाद न करें — पहले post की शर्तें पढ़ें।",
              "Deposit कभी न दें और penalty वाला paper कभी sign न करें — दोनों banned हैं।"
            ]
          },
          ja: {
            title: "インドから日本の仕事に申し込む",
            simple: "あなたはインドにいて、日本の仕事がほしいです。これがあなたの正確な道です。順番に説明します。いちばん大きいルールを最初に覚えてください: 申し込みはいつも無料です。仕事のためにお金を取ることは誰にもできません。",
            steps: [
              "最初に2つの試験に合格してください: 日本語の試験（JLPT N4かJFT-Basic）と、あなたの分野のSSW技能試験。どちらの試験もインドで受けられます（Prometric）。この2つがなければ、会社はあなたをSSWで雇えません。",
              "2つの日本の履歴書を作ってください: 履歴書と職務経歴書。無料の記入済みサンプルは、このウェブサイトの「履歴書のサンプル」のガイドにあります。",
              "Guidable JobsとYOLO WORKで無料で申し込んでください。すべての投稿を注意深く読んでください。インド/海外からの申し込みがOKとはっきり書いてある場所だけに申し込んでください。ほとんどの投稿は、すでに日本に住んでいる人のためです。",
              "政府のオンライン・マッチングイベントを見てください（SSWポータル）。いくつかのイベントは、インドからオンラインで参加できます。",
              "面接はオンラインです。ゆっくり話して、全部聞いてください。その前に「面接のまちがい」のガイド（Company Sach パート3）を必ず読んでください。",
              "オファーをもらいましたか？仕事のオファーはビザではありません。会社が日本であなたのCOEを申請します（約1-3ヶ月、COEの料金はありません）。それからあなたがインドでビザを申請します。",
              "TITPはちがいます: 直接の申し込みは絶対にありません。インドのNSDC認定の送出機関と、日本の免許のある監理団体を通るだけです（「SSWなしで日本の仕事」のガイドを見てください）。",
              "最初の月のお金を準備してください: 給料は普通、次の月の25日に来ます。日本に着いた後の食べ物、電車、毎日の費用のために、約100,000円（約55,000-60,000ルピー）を残してください。"
            ],
            traps: [
              "仕事のためにお金を絶対に払わないでください。候補者のための仕事の料金も、COEの料金もありません。仕事のためにお金を要求する人は、公式の道ではありません。",
              "すでに日本に住んでいることが必要な投稿に時間を無駄にしないでください。最初に投稿の条件を読んでください。",
              "デポジットを絶対に払わないでください。罰金の紙に絶対にサインしないでください。どちらも禁止です。"
            ]
          }
        },
        {
          id: "apply-job-in-japan", section: "jobs",
          keywords: "apply job in japan hello work job change foreigners corner fair students engineer visa ハローワーク 転職 日本にいる 申し込み 仕事探し 外国人コーナー",
          sources: [ { label: "Hello Work - Public Employment Service - hellowork.mhlw.go.jp", url: "https://www.hellowork.mhlw.go.jp/" }, { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp/" }, { label: "YOLO WORK - work.yolo-japan.com", url: "https://work.yolo-japan.com/" } ],
          en: {
            title: "Applying for a Job in Japan — You Are Already in Japan",
            simple: "You already live in Japan — student, trainee or worker — and you want a job, or a job change, inside Japan. Your road is shorter, and your biggest help is FREE: Hello Work, the government's job office. Here is the full way, step by step.",
            steps: [
              "Register FREE at Hello Work, the government's job office. Take your residence card and passport. Many offices have a foreigners' corner and interpreters. They show you jobs, fix your resume and practise interviews with you — all free.",
              "Also apply FREE on Guidable Jobs and YOLO WORK — many posts are only for people already in Japan, so your chance is higher.",
              "Keep your 2 Japanese resumes ready — Rirekisho and Shokumu Keirekisho. Free filled samples are in the 'Resume Samples' guide on this website.",
              "Go to free job fairs and matching events for foreign workers (Hello Work and government events). You meet companies face to face — carry printed resumes with you.",
              "Know your status rules before you change: on SSW you can change jobs only inside the same field. On TITP you cannot simply change companies — talk to OTIT or your support organisation first.",
              "Students: with a degree, companies can hire you for the Engineer visa — job fairs for foreign students are your best door. Your Japanese decides your chance: from N3, companies start choosing you (see Company Sach Part 2).",
              "The interview is in person: reach 10 minutes early, carry your documents, speak slowly and listen fully (see Company Sach Part 3).",
              "When you change jobs, the paperwork matters most: a job change must be reported to Immigration within 14 days. Before you resign, ask your support organisation to check your papers."
            ],
            traps: [
              "Never pay for a job — applying, Hello Work and fairs are all free.",
              "Do not resign before your next job and your status paperwork are confirmed — a gap can hurt your visa.",
              "A new job in a different field is not allowed on SSW — same field only."
            ]
          },
          hi: {
            title: "Japan में रहकर नौकरी के लिए Apply — आप पहले से Japan में हैं",
            simple: "आप पहले से Japan में रहते हैं — student, trainee या worker — और Japan के अंदर ही नौकरी, या नौकरी बदलाव, चाहते हैं। आपका रास्ता छोटा है, और आपकी सबसे बड़ी मदद FREE है: Hello Work, सरकार का job office। ये रहा पूरा तरीका, step by step।",
            steps: [
              "Hello Work (सरकार के job office) में FREE register करें। अपना residence card और passport साथ ले जाएँ। कई offices में foreigners' corner और interpreter होते हैं। वे आपको नौकरियाँ दिखाते हैं, resume ठीक करते हैं और interview की practice कराते हैं — सब free।",
              "Guidable Jobs और YOLO WORK पर भी FREE apply करें — कई posts सिर्फ़ Japan में पहले से रहने वालों के लिए होते हैं, इसलिए आपका chance ज़्यादा है।",
              "अपने 2 Japanese resume तैयार रखें — Rirekisho और Shokumu Keirekisho। भरे हुए free samples इस website की 'Resume Samples' guide में हैं।",
              "विदेशी workers के लिए होने वाले free job fairs और matching events में जाएँ (Hello Work और government events)। वहाँ companies से आमने-सामने मिलते हैं — printed resume साथ ले जाएँ।",
              "बदलने से पहले अपने status के नियम जानें: SSW पर आप सिर्फ़ उसी field के अंदर नौकरी बदल सकते हैं। TITP पर आप आसानी से company नहीं बदल सकते — पहले OTIT या अपनी support organisation से बात करें।",
              "Students: अगर आपके पास degree है, तो companies आपको Engineer visa पर रख सकती हैं — foreign students के job fairs आपका सबसे अच्छा दरवाज़ा हैं। आपकी Japanese ही आपका chance तय करती है: N3 से companies आपको चुनना शुरू करती हैं (Company Sach Part 2 देखें)।",
              "Interview आमने-सामने होगा: 10 minute पहले पहुँचें, documents साथ रखें, धीरे बोलें और पूरी बात सुनें (Company Sach Part 3 देखें)।",
              "नौकरी बदलते समय paperwork सबसे ज़रूरी है: नौकरी बदलने की सूचना Immigration को 14 दिन के अंदर देनी होती है। इस्तीफ़ा देने से पहले अपनी support organisation से papers check कराएँ।"
            ],
            traps: [
              "नौकरी के लिए कभी पैसा न दें — apply करना, Hello Work, fairs: सब free है।",
              "अगली नौकरी और status का paperwork pakka होने से पहले इस्तीफ़ा न दें — बीच का gap आपके वीज़ा को नुकसान पहुँचा सकता है।",
              "SSW पर अलग field की नई नौकरी allowed नहीं है — सिर्फ़ वही field।"
            ]
          },
          ja: {
            title: "日本に住んでいる人の仕事の申し込み",
            simple: "あなたはすでに日本に住んでいます。学生、実習生、または働く人です。日本の中で仕事、または仕事の変更がほしいです。あなたの道は短いです。そしていちばん大きい助けは無料です: ハローワーク、政府の仕事の事務所です。これが全部の方法です。順番に説明します。",
            steps: [
              "ハローワーク（政府の仕事の事務所）に無料で登録してください。在留カードとパスポートを持って行ってください。多くの事務所に外国人のコーナーと通訳がいます。仕事を見せて、履歴書を直して、面接の練習をします。全部無料です。",
              "Guidable JobsとYOLO WORKでも無料で申し込んでください。多くの投稿は、すでに日本に住んでいる人だけのためです。だからあなたのチャンスは高いです。",
              "2つの日本の履歴書を準備してください: 履歴書と職務経歴書。無料の記入済みサンプルは、このウェブサイトの「履歴書のサンプル」のガイドにあります。",
              "外国人の働く人のための無料の就職フェアとマッチングイベントに行ってください（ハローワークと政府のイベント）。会社と直接会えます。印刷した履歴書を持って行ってください。",
              "変える前に、あなたの資格のルールを知ってください: SSWでは、同じ分野の中でだけ仕事を変えられます。TITPでは、簡単に会社を変えられません。まずOTITか、あなたの支援機関に相談してください。",
              "学生: 学位があれば、会社はあなたをエンジニアビザで雇えます。外国人学生のための就職フェアが、あなたのいちばんいいドアです。あなたの日本語がチャンスを決めます: N3から会社があなたを選び始めます（Company Sach パート2を見てください）。",
              "面接は直接です: 10分前に着いて、書類を持って、ゆっくり話して、全部聞いてください（Company Sach パート3を見てください）。",
              "仕事を変えるとき、書類がいちばん大切です: 仕事の変更を14日以内に出入国在留管理庁（しゅつにゅうこくざいりゅうかんりちょう）に知らせなければなりません。辞（や）める前に、あなたの支援機関に紙を確認してもらってください。"
            ],
            traps: [
              "仕事のためにお金を絶対に払わないでください。申し込み、ハローワーク、フェア: 全部無料です。",
              "次の仕事と資格の書類が確実になる前に、辞めないでください。間の空白があなたのビザを傷つけることがあります。",
              "SSWでは、ちがう分野の新しい仕事は許可されません。同じ分野だけです。"
            ]
          }
        },
        {
          id: "resume-samples-2-styles", section: "jobs",
          keywords: "resume sample rirekisho shokumu keirekisho cv japanese resume format sample example履歴書 職務経歴書 रिज़्यूमे नमूना सैंपल जापानी रिज़्यूमे बायोडाटा 履歴書 職務経歴書 サンプル 志望動機 写真 書き方",
          sources: [ { label: "Hello Work - Public Employment Service - hellowork.mhlw.go.jp", url: "https://www.hellowork.mhlw.go.jp/" } ],
          reel: "https://www.instagram.com/reel/DfubZFcO5gE/",
          en: {
            title: "Resume Samples - 2 Styles for Japan Jobs",
            simple: "In Japan, a job application usually needs a resume - and there are 2 styles. Style 1 is the Rirekisho: the standard one-page Japanese resume almost every company asks for first. Style 2 is the Shokumu Keirekisho: a work-experience sheet that explains your jobs and skills in detail. Below are full samples of both. The name and details in the samples are EXAMPLES - copy the style, and write your own true details.",
            steps: [
              "STYLE 1 - RIREKISHO (the standard resume). Photo, size 4 cm x 3 cm, formal, plain background, taken in the last 3 months. Sample photo place: top-right corner of the form.",
              "Rirekisho sample - personal details: Name: Amit Kumar (SAMPLE name). Furigana (name in katakana): アミット・クマール. Date of birth: 10 May 2002. Address: New Delhi, India. Phone and email: your real, working ones - the company will contact you on these.",
              "Rirekisho sample - history (write in year order, school and work together): 2020 - Passed Class 12 (Higher Secondary). 2020–2023 - Worked at a parts factory in India: checking and packing machine parts. 2024 - Passed JLPT N4. 2024 - Passed the SSW skill test (Manufacturing). Nothing after that - write 'ijou' (end) on the next line, like Japanese resumes do.",
              "Rirekisho sample - licences and qualifications (separate box): JLPT N4 - passed. JFT-Basic - passed. SSW Skill Test, Manufacturing - passed. (Write only what you have truly passed.)",
              "Rirekisho sample - reason for applying (shibou douki): 'I want to work in Japanese manufacturing, use my factory experience, and keep improving my Japanese. I want to work in Japan for a long time.' Short, true, and about THIS company and THIS work - do not copy one line for every company.",
              "Rirekisho sample - your requests (kibou): if the company has not asked anything special, write 'As per company rules' (kiisha kitei ni shitagaimasu). Do not start by demanding salary or holidays.",
              "STYLE 2 - SHOKUMU KEIREKISHO (the work-experience sheet). No fixed form - 1 to 2 pages, typed. It answers one question: 'What work can this person actually do?' Sample below.",
              "Shokumu sample - summary (3 lines at the top): '3 years of factory work in India. Experience in checking and packing machine parts. JLPT N4 passed, now studying for N3. Careful, on time, and used to team work.'",
              "Shokumu sample - work detail: Company: ABC Parts Factory, India (2020–2023). Work: checked machine parts by size and look, removed bad pieces, packed finished parts. Learned: quality checking, counting and records, cleaning and 5S rules. Write your real work like this - what you did, and what you learned.",
              "Shokumu sample - skills list: Parts checking and quality check. Packing and counting. Basic machine-area cleaning. Japanese: N4, daily study going on. Team work and reporting to seniors.",
              "Shokumu sample - self-PR (last part): 'I have never missed work without informing. I study Japanese 20 minutes every day. I want to build my skill in Japan and work long-term.' Only write what is true - the interview will ask about every line."
            ],
            traps: [
              "Never write false dates, false jobs or a test you have not passed. Document screening and the interview will catch it - and one false line can end everything (see Company Sach Part 4).",
              "Your name spelling must match your passport letter by letter - in both resumes, every time.",
              "No selfie, no cap or sunglasses photo, no old photo. One simple formal photo, plain background.",
              "Do not copy the sample person's life. Copy the STYLE - then write your own true school, work and tests."
            ]
          },
          hi: {
            title: "Resume के Sample - Japan की नौकरी के लिए 2 Style",
            simple: "Japan में नौकरी के apply में आमतौर पर resume लगता है - और उसके 2 style होते हैं। Style 1 है Rirekisho: एक page वाला standard जापानी resume, जो लगभग हर कंपनी सबसे पहले माँगती है। Style 2 है Shokumu Keirekisho: काम के अनुभव वाली sheet, जिसमें आपकी नौकरियाँ और skills detail में समझाई जाती हैं। नीचे दोनों के पूरे sample हैं। Sample में नाम और details EXAMPLE हैं - style copy करें, और अपनी सच्ची details लिखें।",
            steps: [
              "STYLE 1 - RIREKISHO (standard resume)। Photo: 4 cm x 3 cm, formal, सादा background, पिछले 3 महीनों में ली हुई। Sample में photo की जगह: form के ऊपर-दायें कोने में।",
              "Rirekisho sample - अपनी जानकारी: नाम: Amit Kumar (SAMPLE नाम)। Furigana (katakana में नाम): アミット・クマール। जन्म तारीख: 10 मई 2002। पता: New Delhi, India। Phone और email: अपने असली, चालू वाले - कंपनी इन्हीं पर संपर्क करेगी।",
              "Rirekisho sample - इतिहास (साल के क्रम में लिखें, पढ़ाई और काम एक साथ): 2020 - Class 12 (Higher Secondary) पास। 2020–2023 - India की एक parts factory में काम: machine parts की जाँच और packing। 2024 - JLPT N4 पास। 2024 - SSW skill test (Manufacturing) पास। इसके बाद कुछ नहीं - अगली line में 'ijou' (समाप्त) लिखें, जैसे जापानी resume में होता है।",
              "Rirekisho sample - licence और योग्यता (अलग box): JLPT N4 - पास। JFT-Basic - पास। SSW Skill Test, Manufacturing - पास। (सिर्फ़ वही लिखें जो आपने सच में पास किया है।)",
              "Rirekisho sample - apply करने की वजह (shibou douki): 'मैं जापान के manufacturing में काम करना चाहता हूँ, अपने factory अनुभव का इस्तेमाल करना चाहता हूँ, और अपनी जापानी बेहतर करते रहना चाहता हूँ। मैं जापान में लंबे समय तक काम करना चाहता हूँ।' छोटा, सच्चा, और इसी कंपनी व इसी काम के बारे में - हर कंपनी के लिए एक ही line copy न करें।",
              "Rirekisho sample - आपकी माँगें (kibou): कंपनी ने कुछ ख़ास न पूछा हो, तो लिखें - 'कंपनी के नियमों के अनुसार' (kiisha kitei ni shitagaimasu)। शुरुआत में ही salary या छुट्टी की माँग न करें।",
              "STYLE 2 - SHOKUMU KEIREKISHO (काम-अनुभव वाली sheet)। कोई तय form नहीं - 1 से 2 page, type की हुई। यह एक सवाल का जवाब देती है: 'यह इंसान असल में क्या काम कर सकता है?' Sample नीचे है।",
              "Shokumu sample - सारांश (ऊपर 3 line): 'India में 3 साल factory का काम। Machine parts की जाँच और packing का अनुभव। JLPT N4 पास, अब N3 की पढ़ाई चल रही है। ध्यान से काम, समय की पाबंदी, और team में काम की आदत।'",
              "Shokumu sample - काम की detail: कंपनी: ABC Parts Factory, India (2020–2023)। काम: machine parts को size और देखकर जाँचना, ख़राब pieces अलग करना, तैयार parts pack करना। सीखा: quality जाँच, गिनती और record, सफ़ाई और 5S नियम। अपना असली काम इसी तरह लिखें - क्या किया, और क्या सीखा।",
              "Shokumu sample - skills की list: Parts की जाँच और quality check। Packing और गिनती। Machine वाले हिस्से की basic सफ़ाई। जापानी: N4, रोज़ की पढ़ाई जारी। Team में काम और seniors को report करना।",
              "Shokumu sample - self-PR (आख़िरी हिस्सा): 'मैंने कभी बिना बताए छुट्टी नहीं ली। मैं रोज़ 20 मिनट जापानी पढ़ता हूँ। मैं जापान में अपनी skill बनाना और लंबे समय तक काम करना चाहता हूँ।' सिर्फ़ वही लिखें जो सच है - interview में हर line पर सवाल आएगा।"
            ],
            traps: [
              "कभी झूठी तारीख, झूठी नौकरी या वह test न लिखें जो पास नहीं किया। Documents की जाँच और interview में यह पकड़ा जाएगा - और एक झूठी line सब ख़त्म कर सकती है (Company Sach Part 4 देखें)।",
              "आपके नाम की spelling passport से अक्षर-अक्षर मिलनी चाहिए - दोनों resume में, हर बार।",
              "Selfie नहीं, टोपी या धूप के चश्मे वाली photo नहीं, पुरानी photo नहीं। एक simple formal photo, सादा background।",
              "Sample वाले इंसान की ज़िंदगी copy न करें। STYLE copy करें - फिर अपनी सच्ची पढ़ाई, काम और tests लिखें।"
            ]
          },
          ja: {
            title: "履歴書のサンプル - 日本の仕事のための2つのスタイル",
            simple: "日本では、仕事の申し込みには普通、履歴書（りれきしょ）が必要です。スタイルは2つあります。スタイル1は履歴書: ほとんどすべての会社が最初に求める、標準の1ページの日本の履歴書。スタイル2は職務経歴書（しょくむけいれきしょ）: あなたの仕事とスキルを詳しく説明する、仕事の経験の紙。下に両方の全部のサンプルがあります。サンプルの名前と詳しいことは例です。スタイルを写して、あなたの本当のことを書いてください。",
            steps: [
              "スタイル1 - 履歴書（標準の履歴書）。写真、サイズ4cm×3cm、フォーマル、無地（むじ）の背景、最近3ヶ月以内に撮ったもの。サンプルの写真の場所: フォームの右上の角。",
              "履歴書のサンプル - 個人の情報: 名前: Amit Kumar（サンプルの名前）。ふりがな（名前をカタカナで）: アミット・クマール。生年月日: 2002年5月10日。住所: New Delhi, India。電話とメール: あなたの本当の、使えるもの。会社はこれであなたに連絡します。",
              "履歴書のサンプル - 歴史（年の順番で書く、学校と仕事を一緒に）: 2020年 - 12年生に合格。2020-2023年 - インドの部品工場で働いた: 機械の部品の確認と梱包（こんぽう）。2024年 - JLPT N4に合格。2024年 - SSW技能試験（製造）に合格。その後は何もありません。次の行に「以上（いじょう）」と書いてください。日本の履歴書のように。",
              "履歴書のサンプル - 免許と資格（別の箱）: JLPT N4 - 合格。JFT-Basic - 合格。SSW技能試験、製造 - 合格。（本当に合格したものだけ書いてください。）",
              "履歴書のサンプル - 志望動機（しぼうどうき）:「日本の製造で働いて、工場の経験を使って、日本語を上げ続けたいです。日本で長く働きたいです。」短く、本当に、この会社とこの仕事について。すべての会社に同じ1行を写さないでください。",
              "履歴書のサンプル - あなたの希望（きぼう）: 会社が特別なことを聞いていなければ、「貴社規定にしたがいます」と書いてください。給料や休みを要求することから始めないでください。",
              "スタイル2 - 職務経歴書（仕事の経験の紙）。決まったフォームはありません。1-2ページ、タイプしたもの。1つの質問に答えます:「この人は本当に何の仕事ができますか？」下にサンプル。",
              "職務経歴書のサンプル - まとめ（上に3行）:「インドで3年の工場の仕事。機械の部品の確認と梱包の経験。JLPT N4合格、今N3を勉強中。注意深く、時間通り、チームの仕事に慣れています。」",
              "職務経歴書のサンプル - 仕事の詳しいこと: 会社: ABC Parts Factory, India（2020-2023）。仕事: 機械の部品をサイズと見た目で確認し、悪い部品を取り除き、完成した部品を梱包した。学んだこと: 品質（ひんしつ）の確認、数えることと記録（きろく）、掃除と5Sのルール。あなたの本当の仕事をこのように書いてください。何をして、何を学んだか。",
              "職務経歴書のサンプル - スキルのリスト: 部品の確認と品質の確認。梱包と数えること。基本の機械の場所の掃除。日本語: N4、毎日の勉強が続いています。チームの仕事と先輩への報告。",
              "職務経歴書のサンプル - 自己PR（最後の部分）:「連絡なしに仕事を休んだことは一度もありません。毎日20分、日本語を勉強します。日本でスキルを作って、長く働きたいです。」本当のことだけ書いてください。面接はすべての行について聞きます。"
            ],
            traps: [
              "ウソの日付、ウソの仕事、合格していない試験を絶対に書かないでください。書類の審査と面接が見つけます。1つのウソの行が全部を終わらせることがあります（Company Sach パート4を見てください）。",
              "あなたの名前の文字は、パスポートと1文字ずつ合わなければなりません。両方の履歴書で、毎回。",
              "セルフィーなし、帽子（ぼうし）やサングラスの写真なし、古い写真なし。1つの簡単なフォーマルな写真、無地の背景。",
              "サンプルの人の人生を写さないでください。スタイルを写してください。それから、あなたの本当の学校、仕事、試験を書いてください。"
            ]
          }
        }
      ];

      /* ================= JOURNEY PATHS =================
         The 3 doors on the homepage. Each path is a list of
         guide ids, in the order a person should read them. */
      var PATHS = [
        {
          id: "from-india",
          en: { name: "I am in India - I want to come to Japan", desc: "The full road from India: visa, tests, job, and how not to get cheated on the way." },
          hi: { name: "मैं India में हूँ - मुझे Japan आना है", desc: "India से पूरा रास्ता: visa, tests, नौकरी, और रास्ते में ठगे जाने से कैसे बचें।" },
          ja: { name: "私はインドにいます - 日本に来たい", desc: "インドからの全部の道: ビザ、試験、仕事、そして途中でだまされない方法。" },
          guides: ["all-visas-at-a-glance", "ssw-titp-visas", "prometric-registration", "ssw2-free-books", "free-japanese-classes", "company-sach-2-n4-n3-n2", "resume-samples-2-styles", "apply-job-from-india", "company-sach-4-apply-to-offer", "agent-money-system"]
        },
        {
          id: "in-japan",
          en: { name: "I am already in Japan", desc: "Life inside Japan: emergency numbers, problems, salary rules, and your next visa step." },
          hi: { name: "मैं पहले से Japan में हूँ", desc: "Japan के अंदर की ज़िंदगी: emergency नंबर, परेशानियाँ, वेतन के नियम, और आपका अगला visa कदम।" },
          ja: { name: "私はもう日本にいます", desc: "日本での生活: 緊急の番号、問題、給料のルール、次のビザのステップ。" },
          guides: ["emergency-contacts", "report-a-problem", "minimum-wage", "work-contract-words", "titp-ending-ikusei-shuro", "ssw1-to-ssw2", "kaigo-other-door", "apply-job-in-japan"]
        },
        {
          id: "job-hunt",
          en: { name: "I am looking for a job in Japan", desc: "What companies really want, the mistakes that reject you, and the resume that gets you called." },
          hi: { name: "मुझे Japan में नौकरी चाहिए", desc: "कंपनियाँ असल में क्या चाहती हैं, कौन-सी गलतियाँ reject कराती हैं, और वो resume जो आपको बुलावा दिलाए।" },
          ja: { name: "日本で仕事を探しています", desc: "会社が本当に見ること、落ちるまちがい、電話が来る履歴書（りれきしょ）。" },
          guides: ["company-sach-1-what-companies-want", "company-sach-2-n4-n3-n2", "company-sach-3-interview-mistakes", "resume-samples-2-styles", "company-sach-4-apply-to-offer", "company-sach-5-one-advice", "work-without-ssw", "apply-job-in-japan", "welding-job-japan", "bsc-nursing-roadmap"]
        }
      ];

      var LINKS = [
        { label: "SSW Official Portal", url: "https://www.ssw.go.jp", host: "ssw.go.jp",
          en: "Visas, tests and rules for Specified Skilled Workers - the main official source.",
          hi: "SSW वर्करों के लिए वीज़ा, टेस्ट और नियम - मुख्य आधिकारिक स्रोत।",
          ja: "特定技能（とくていぎのう）のビザ、試験、ルール - いちばん大切な公式の情報元。" },
        { label: "Kaigo Fukushishi Exam (Official)", url: "https://www.sssc.or.jp", host: "sssc.or.jp",
          en: "The official exam centre for the national care worker exam.",
          hi: "राष्ट्रीय केयर वर्कर परीक्षा का आधिकारिक परीक्षा केंद्र।",
          ja: "介護福祉士（かいごふくしし）の国家試験（こっかしけん）の公式の試験センター。" },
        { label: "Immigration Services Agency", url: "https://www.isa.go.jp", host: "isa.go.jp",
          en: "Residence status, procedures and applications.",
          hi: "रेज़िडेंस स्टेटस, प्रक्रियाएँ और आवेदन।",
          ja: "在留資格（ざいりゅうしかく）、手続き（てつづき）、申請（しんせい）。" },
        { label: "Ministry of Health, Labour and Welfare", url: "https://www.mhlw.go.jp", host: "mhlw.go.jp",
          en: "Labour rules, minimum wage by prefecture, health and welfare.",
          hi: "श्रम नियम, प्रान्त के हिसाब से न्यूनतम वेतन, स्वास्थ्य और कल्याण।",
          ja: "労働（ろうどう）のルール、県ごとの最低賃金、健康（けんこう）と福祉（ふくし）。" },
        { label: "Consumer Affairs Agency - Hotline 188", url: "https://www.caa.go.jp", host: "caa.go.jp",
          en: "Shopping and contract problems - call the Consumer Hotline on 188 to reach your nearest Consumer Centre.",
          hi: "खरीदारी और कॉन्ट्रैक्ट की परेशानी - Consumer Hotline 188 पर कॉल करें, सबसे पास वाला Consumer Centre मिलेगा।",
          ja: "買い物と契約の問題 - 消費者ホットライン188に電話すると、近くの消費生活センターにつながります。" },
        { label: "JETRO Open for Professionals", url: "https://www.jetro.go.jp/en/hrportal/", host: "jetro.go.jp",
          en: "Big Japanese companies hiring foreign professionals - the official JETRO list. For Engineer-visa level jobs.",
          hi: "विदेशी professionals को रखने वाली बड़ी जापानी कंपनियाँ - JETRO की आधिकारिक लिस्ट। Engineer वीज़ा level की नौकरियों के लिए।",
          ja: "外国人のプロフェッショナルを雇（やと）う大きな日本の会社 - JETROの公式リスト。技術（ぎじゅつ）・人文知識（じんぶんちしき）・国際業務（こくさいぎょうむ）の仕事のため。" }
      ];

      var COURSE_ALIASES = "try japan course 30 days 30 din hiragana katakana kanji learn japanese japanese seekho japanese course beginner nihongo survival japanese जापानी सीखें जापानी सीखो कोर्स तीस दिन हिरागाना काताकाना";

      var COURSE_WEEKS = [
        {
          en: { name: "Week 1 - Hiragana: Japan's ABC", dates: "7–13 Dec" },
          hi: { name: "हफ़्ता 1 - Hiragana: जापान की ABC", dates: "7–13 दिसंबर" },
          ja: { name: "第1週 - ひらがな: 日本のABC", dates: "12月7-13日" },
          days: [
            { n: 1, dateEn: "Mon 7 Dec", dateHi: "सोम 7 दिस", dateJa: "12月7日（月）",
              en: { title: "Three scripts + vowels", detail: "Japanese uses 3 scripts - Hiragana, Katakana and Kanji. No fear: start with the 5 vowels - あ a, い i, う u, え e, お o." },
              hi: { title: "तीन स्क्रिप्ट + स्वर (Vowels)", detail: "जापानी में 3 स्क्रिप्ट होती हैं - Hiragana, Katakana और Kanji। डर ख़त्म: शुरुआत 5 स्वरों से - あ a, い i, う u, え e, お o।" },
              ja: { title: "3つの文字 + 母音（ぼいん）", detail: "日本語は3つの文字を使います - ひらがな、カタカナ、漢字。怖（こわ）がらないでください: 5つの母音から始めてください - あ a、い i、う u、え e、お o。" } },
            { n: 2, dateEn: "Tue 8 Dec", dateHi: "मंगल 8 दिस", dateJa: "12月8日（火）",
              en: { title: "Ka row + Sa row", detail: "かきくけこ - ka, ki, ku, ke, ko · さしすせそ - sa, shi, su, se, so." },
              hi: { title: "Ka पंक्ति + Sa पंक्ति", detail: "かきくけこ - ka, ki, ku, ke, ko · さしすせそ - sa, shi, su, se, so।" },
              ja: { title: "か行 + さ行", detail: "かきくけこ - ka, ki, ku, ke, ko · さしすせそ - sa, shi, su, se, so。" } },
            { n: 3, dateEn: "Wed 9 Dec", dateHi: "बुध 9 दिस", dateJa: "12月9日（水）",
              en: { title: "Ta row + Na row", detail: "たちつてと - ta, chi, tsu, te, to · なにぬねの - na, ni, nu, ne, no." },
              hi: { title: "Ta पंक्ति + Na पंक्ति", detail: "たちつてと - ta, chi, tsu, te, to · なにぬねの - na, ni, nu, ne, no।" },
              ja: { title: "た行 + な行", detail: "たちつてと - ta, chi, tsu, te, to · なにぬねの - na, ni, nu, ne, no。" } },
            { n: 4, dateEn: "Thu 10 Dec", dateHi: "गुरु 10 दिस", dateJa: "12月10日（木）",
              en: { title: "Ha row + Ma row", detail: "はひふへほ - ha, hi, fu, he, ho · まみむめも - ma, mi, mu, me, mo." },
              hi: { title: "Ha पंक्ति + Ma पंक्ति", detail: "はひふへほ - ha, hi, fu, he, ho · まみむめも - ma, mi, mu, me, mo।" },
              ja: { title: "は行 + ま行", detail: "はひふへほ - ha, hi, fu, he, ho · まみむめも - ma, mi, mu, me, mo。" } },
            { n: 5, dateEn: "Fri 11 Dec", dateHi: "शुक्र 11 दिस", dateJa: "12月11日（金）",
              en: { title: "Ya, Ra + Wa rows", detail: "やゆよ - ya, yu, yo · らりるれろ - ra, ri, ru, re, ro · わをん - wa, wo, n. Hiragana complete!" },
              hi: { title: "Ya, Ra + Wa पंक्तियाँ", detail: "やゆよ - ya, yu, yo · らりるれろ - ra, ri, ru, re, ro · わをん - wa, wo, n। Hiragana पूरा!" },
              ja: { title: "や行、ら行 + わ行", detail: "やゆよ - ya, yu, yo · らりるれろ - ra, ri, ru, re, ro · わをん - wa, wo, n。ひらがな完成（かんせい）！" } },
            { n: 6, dateEn: "Sat 12 Dec", dateHi: "शनि 12 दिस", dateJa: "12月12日（土）",
              en: { title: "Dakuten - the ten-ten marks", detail: "Two small marks change the sound: か → が, さ → ざ, た → だ, は → ば → ぱ." },
              hi: { title: "Dakuten - टेन-टेन वाले निशान", detail: "दो छोटे निशान आवाज़ बदल देते हैं: か → が, さ → ざ, た → だ, は → ば → ぱ।" },
              ja: { title: "濁点（だくてん）- てんてんのマーク", detail: "2つの小さいマークが音を変えます: か → が、さ → ざ、た → だ、は → ば → ぱ。" } },
            { n: 7, dateEn: "Sun 13 Dec", dateHi: "रवि 13 दिस", dateJa: "12月13日（日）",
              en: { title: "Week 1 test - read 10 words", detail: "Read aloud: あい (love), すし, さくら, ねこ, うみ, かぜ, ゆき, はな, つき, ほし. Post your score in the comments." },
              hi: { title: "हफ़्ता 1 टेस्ट - 10 शब्द पढ़ें", detail: "ज़ोर से पढ़ें: あい (प्यार), すし, さくら, ねこ, うみ, かぜ, ゆき, はな, つき, ほし। अपना स्कोर कमेंट में लिखें।" },
              ja: { title: "第1週のテスト - 10の言葉を読む", detail: "声を出して読んでください: あい（愛）、すし、さくら、ねこ、うみ、かぜ、ゆき、はな、つき、ほし。あなたのスコアをコメントに書いてください。" } }
          ]
        },
        {
          en: { name: "Week 2 - Katakana + First Words", dates: "14–20 Dec" },
          hi: { name: "हफ़्ता 2 - Katakana + पहले शब्द", dates: "14–20 दिसंबर" },
          ja: { name: "第2週 - カタカナ + 最初の言葉", dates: "12月14-20日" },
          days: [
            { n: 8, dateEn: "Mon 14 Dec", dateHi: "सोम 14 दिस", dateJa: "12月14日（月）",
              en: { title: "Katakana - the script for foreign words", detail: "Katakana writes words that came from other languages. Start: アイウエオ, カキクケコ - now read コーヒー (coffee)." },
              hi: { title: "Katakana - विदेशी शब्दों की स्क्रिप्ट", detail: "दूसरी भाषाओं से आए शब्द Katakana में लिखे जाते हैं। शुरुआत: アイウエオ, カキクケコ - अब コーヒー (coffee) पढ़कर देखें।" },
              ja: { title: "カタカナ - 外国の言葉の文字", detail: "カタカナは他の言語から来た言葉を書きます。スタート: アイウエオ、カキクケコ - 今、コーヒーを読んでください。" } },
            { n: 9, dateEn: "Tue 15 Dec", dateHi: "मंगल 15 दिस", dateJa: "12月15日（火）",
              en: { title: "Katakana 2 + your name in Japanese", detail: "The サ to ノ rows - then write your own name in Katakana and post it as homework." },
              hi: { title: "Katakana 2 + जापानी में आपका नाम", detail: "サ से ノ तक की पंक्तियाँ - फिर अपना नाम Katakana में लिखें और होमवर्क के तौर पर कमेंट करें।" },
              ja: { title: "カタカナ2 + 日本語であなたの名前", detail: "サ行からノ行まで。それから、あなたの名前をカタカナで書いて、宿題（しゅくだい）としてコメントしてください。" } },
            { n: 10, dateEn: "Wed 16 Dec", dateHi: "बुध 16 दिस", dateJa: "12月16日（水）",
              en: { title: "Katakana complete - read a menu", detail: "The ハ to ワ rows. Read real words: ラーメン (ramen), ビール (beer), テレビ (TV), ホテル (hotel)." },
              hi: { title: "Katakana पूरा - मेनू पढ़ें", detail: "ハ से ワ तक की पंक्तियाँ। असली शब्द पढ़ें: ラーメン (ramen), ビール (beer), テレビ (TV), ホテル (hotel)।" },
              ja: { title: "カタカナ完成 - メニューを読む", detail: "ハ行からワ行まで。本当の言葉を読んでください: ラーメン、ビール、テレビ、ホテル。" } },
            { n: 11, dateEn: "Thu 17 Dec", dateHi: "गुरु 17 दिस", dateJa: "12月17日（木）",
              en: { title: "Greetings 1", detail: "おはようございます (good morning), こんにちは (hello), こんばんは (good evening), おやすみなさい (good night)." },
              hi: { title: "अभिवादन 1", detail: "おはようございます (सुप्रभात), こんにちは (नमस्ते), こんばんは (शुभ संध्या), おやすみなさい (शुभ रात्रि)।" },
              ja: { title: "あいさつ1", detail: "おはようございます（朝のあいさつ）、こんにちは（昼のあいさつ）、こんばんは（夜のあいさつ）、おやすみなさい（寝（ね）る前）。" } },
            { n: 12, dateEn: "Fri 18 Dec", dateHi: "शुक्र 18 दिस", dateJa: "12月18日（金）",
              en: { title: "Greetings 2 - the 4 most useful", detail: "ありがとうございます (thank you), すみません (excuse me / sorry), おねがいします (please), はい / いいえ (yes / no)." },
              hi: { title: "अभिवादन 2 - सबसे काम के 4", detail: "ありがとうございます (धन्यवाद), すみません (माफ़ कीजिए / सॉरी), おねがいします (कृपया), はい / いいえ (हाँ / नहीं)।" },
              ja: { title: "あいさつ2 - いちばん役立つ4つ", detail: "ありがとうございます、すみません、おねがいします、はい / いいえ。" } },
            { n: 13, dateEn: "Sat 19 Dec", dateHi: "शनि 19 दिस", dateJa: "12月19日（土）",
              en: { title: "Introduce yourself in Japanese", detail: "はじめまして。___です。インドから きました。よろしく おねがいします。- your full introduction, in Japanese." },
              hi: { title: "जापानी में अपना परिचय दें", detail: "はじめまして。___です。インドから きました。よろしく おねがいします。- आपका पूरा परिचय, जापानी में।" },
              ja: { title: "日本語で自己紹介（じこしょうかい）", detail: "はじめまして。___です。インドから きました。よろしく おねがいします。- あなたの全部の紹介（しょうかい）、日本語で。" } },
            { n: 14, dateEn: "Sun 20 Dec", dateHi: "रवि 20 दिस", dateJa: "12月20日（日）",
              en: { title: "Numbers 1–10 + asking a price", detail: "いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう (1–10) + これは いくらですか? (How much is this?)" },
              hi: { title: "नंबर 1–10 + दाम पूछना", detail: "いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう (1–10) + これは いくらですか? (यह कितने का है?)" },
              ja: { title: "数字（すうじ）1-10 + 値段（ねだん）を聞く", detail: "いち、に、さん、よん、ご、ろく、なな、はち、きゅう、じゅう（1-10）+ これは いくらですか？" } }
          ]
        },
        {
          en: { name: "Week 3 - Words That Work", dates: "21–27 Dec" },
          hi: { name: "हफ़्ता 3 - काम के शब्द", dates: "21–27 दिसंबर" },
          ja: { name: "第3週 - 役立つ言葉", dates: "12月21-27日" },
          days: [
            { n: 15, dateEn: "Mon 21 Dec", dateHi: "सोम 21 दिस", dateJa: "12月21日（月）",
              en: { title: "Verbs set 1 - everyday life", detail: "たべる (eat), のむ (drink), いく (go), くる (come), みる (see / watch)." },
              hi: { title: "क्रियाएँ सेट 1 - रोज़ की ज़िंदगी", detail: "たべる (खाना), のむ (पीना), いく (जाना), くる (आना), みる (देखना)।" },
              ja: { title: "動詞（どうし）セット1 - 毎日の生活", detail: "たべる、のむ、いく、くる、みる。" } },
            { n: 16, dateEn: "Tue 22 Dec", dateHi: "मंगल 22 दिस", dateJa: "12月22日（火）",
              en: { title: "Verbs set 2 - doing words", detail: "かう (buy), はたらく (work), はなす (speak), きく (listen / ask), つくる (make)." },
              hi: { title: "क्रियाएँ सेट 2 - काम की क्रियाएँ", detail: "かう (खरीदना), はたらく (काम करना), はなす (बोलना), きく (सुनना / पूछना), つくる (बनाना)।" },
              ja: { title: "動詞セット2 - することの言葉", detail: "かう、はたらく、はなす、きく、つくる。" } },
            { n: 17, dateEn: "Wed 23 Dec", dateHi: "बुध 23 दिस", dateJa: "12月23日（水）",
              en: { title: "Everyday nouns", detail: "みず (water), パン (bread), おかね (money), でんしゃ (train), みせ (shop), いえ (home), しごと (work)." },
              hi: { title: "रोज़ के संज्ञा शब्द", detail: "みず (पानी), パン (ब्रेड), おかね (पैसा), でんしゃ (ट्रेन), みせ (दुकान), いえ (घर), しごと (काम)।" },
              ja: { title: "毎日の名詞（めいし）", detail: "みず、パン、おかね、でんしゃ、みせ、いえ、しごと。" } },
            { n: 18, dateEn: "Thu 24 Dec", dateHi: "गुरु 24 दिस", dateJa: "12月24日（木）",
              en: { title: "Adjectives", detail: "おおきい (big), ちいさい (small), たかい (expensive / high), やすい (cheap), おいしい (tasty), あつい (hot), さむい (cold)." },
              hi: { title: "विशेषण (Adjectives)", detail: "おおきい (बड़ा), ちいさい (छोटा), たかい (महँगा / ऊँचा), やすい (सस्ता), おいしい (स्वादिष्ट), あつい (गर्म), さむい (ठंडा)।" },
              ja: { title: "形容詞（けいようし）", detail: "おおきい、ちいさい、たかい、やすい、おいしい、あつい、さむい。" } },
            { n: 19, dateEn: "Fri 25 Dec", dateHi: "शुक्र 25 दिस", dateJa: "12月25日（金）",
              en: { title: "Time words", detail: "きょう (today), あした (tomorrow), きのう (yesterday), いま (now) + なんじですか? (What time is it?)" },
              hi: { title: "समय वाले शब्द", detail: "きょう (आज), あした (आने वाला कल), きのう (बीता हुआ कल), いま (अभी) + なんじですか? (कितने बजे हैं?)" },
              ja: { title: "時間の言葉", detail: "きょう、あした、きのう、いま + なんじですか？" } },
            { n: 20, dateEn: "Sat 26 Dec", dateHi: "शनि 26 दिस", dateJa: "12月26日（土）",
              en: { title: "Your first full sentence", detail: "わたしは ___を たべます / のみます / かいます - the simple magic of the polite ~masu form." },
              hi: { title: "आपका पहला पूरा वाक्य", detail: "わたしは ___を たべます / のみます / かいます - विनम्र ~masu रूप का आसान जादू।" },
              ja: { title: "あなたの最初の全部の文", detail: "わたしは ___を たべます / のみます / かいます - 丁寧（ていねい）な「ます」の形の簡単な魔法（まほう）。" } },
            { n: 21, dateEn: "Sun 27 Dec", dateHi: "रवि 27 दिस", dateJa: "12月27日（日）",
              en: { title: "Week 3 challenge - make 5 sentences", detail: "Make 5 sentences of your own and post them in the comments - the best 5 get read out in the next Reel." },
              hi: { title: "हफ़्ता 3 चैलेंज - 5 वाक्य बनाएँ", detail: "अपने 5 वाक्य बनाएँ और कमेंट में लिखें - सबसे अच्छे 5 अगली Reel में पढ़े जाएँगे।" },
              ja: { title: "第3週のチャレンジ - 5つの文を作る", detail: "あなたの5つの文を作って、コメントに書いてください。いちばんいい5つが次のリールで読まれます。" } }
          ]
        },
        {
          en: { name: "Week 4 - Real Japan", dates: "28 Dec – 5 Jan" },
          hi: { name: "हफ़्ता 4 - असली जापान", dates: "28 दिसंबर – 5 जनवरी" },
          ja: { name: "第4週 - 本当の日本", dates: "12月28日-1月5日" },
          days: [
            { n: 22, dateEn: "Mon 28 Dec", dateHi: "सोम 28 दिस", dateJa: "12月28日（月）",
              en: { title: "Convenience store survival", detail: "これを ください (this one, please), ふくろは いりません (no bag needed) - and how to answer at the till." },
              hi: { title: "कॉनबिनी (सुविधा स्टोर) में काम चलाएँ", detail: "これを ください (यह दे दीजिए), ふくろは いりません (बैग नहीं चाहिए) - और काउंटर पर जवाब कैसे दें।" },
              ja: { title: "コンビニで生きる", detail: "これを ください、ふくろは いりません - そしてレジでどう答えるか。" } },
            { n: 23, dateEn: "Tue 29 Dec", dateHi: "मंगल 29 दिस", dateJa: "12月29日（火）",
              en: { title: "Station survival", detail: "___は どこですか? (Where is ___?), きっぷ (ticket), でんしゃ (train), えき (station)." },
              hi: { title: "स्टेशन पर काम चलाएँ", detail: "___は どこですか? (___ कहाँ है?), きっぷ (टिकट), でんしゃ (ट्रेन), えき (स्टेशन)।" },
              ja: { title: "駅（えき）で生きる", detail: "___は どこですか？、きっぷ、でんしゃ、えき。" } },
            { n: 24, dateEn: "Wed 30 Dec", dateHi: "बुध 30 दिस", dateJa: "12月30日（水）",
              en: { title: "Restaurant survival", detail: "メニューを ください (menu, please), みずを ください (water, please), おかいけい おねがいします (bill, please), ごちそうさまでした (thank you for the meal)." },
              hi: { title: "रेस्टोरेंट में काम चलाएँ", detail: "メニューを ください (मेनू दीजिए), みずを ください (पानी दीजिए), おかいけい おねがいします (बिल दीजिए), ごちそうさまでした (खाने के लिए धन्यवाद)।" },
              ja: { title: "レストランで生きる", detail: "メニューを ください、みずを ください、おかいけい おねがいします、ごちそうさまでした。" } },
            { n: 25, dateEn: "Thu 31 Dec", dateHi: "गुरु 31 दिस", dateJa: "12月31日（木）",
              en: { title: "Words for work", detail: "おつかれさまです (the after-work greeting), わかりました (understood), もういちど おねがいします (once more, please)." },
              hi: { title: "काम पर काम आने वाले शब्द", detail: "おつかれさまです (काम के बाद का अभिवादन), わかりました (समझ गया), もういちど おねがいします (एक बार फिर बोलिए)।" },
              ja: { title: "仕事の言葉", detail: "おつかれさまです（仕事の後のあいさつ）、わかりました、もういちど おねがいします。" } },
            { n: 26, dateEn: "Fri 1 Jan", dateHi: "शुक्र 1 जन", dateJa: "1月1日（金）",
              en: { title: "Help phrases", detail: "たすけてください (help!), わかりません (I don't understand), ゆっくり おねがいします (slowly, please). New Year bonus: あけまして おめでとうございます (Happy New Year)." },
              hi: { title: "मदद माँगने वाले वाक्य", detail: "たすけてください (मदद कीजिए!), わかりません (समझ नहीं आया), ゆっくり おねがいします (धीरे बोलिए)। नए साल का बोनस: あけまして おめでとうございます (नव वर्ष की शुभकामनाएँ)।" },
              ja: { title: "助けの言葉", detail: "たすけてください、わかりません、ゆっくり おねがいします。新年のボーナス: あけまして おめでとうございます。" } },
            { n: 27, dateEn: "Sat 2 Jan", dateHi: "शनि 2 जन", dateJa: "1月2日（土）",
              en: { title: "Basic kanji 1 - people & Japan", detail: "人 (person), 日 (day / sun), 本 (book / origin) - now read 日本 (Japan) and 日本人 (Japanese person)." },
              hi: { title: "बेसिक Kanji 1 - इंसान और जापान", detail: "人 (इंसान), 日 (दिन / सूरज), 本 (किताब / मूल) - अब 日本 (जापान) और 日本人 (जापानी व्यक्ति) पढ़कर देखें।" },
              ja: { title: "基本（きほん）の漢字1 - 人と日本", detail: "人（ひと）、日（ひ）、本（もと）- 今、日本と日本人を読んでください。" } },
            { n: 28, dateEn: "Sun 3 Jan", dateHi: "रवि 3 जन", dateJa: "1月3日（日）",
              en: { title: "Basic kanji 2 - nature & size", detail: "山 (mountain), 川 (river), 田 (rice field), 大 (big), 小 (small), 中 (middle)." },
              hi: { title: "बेसिक Kanji 2 - प्रकृति और आकार", detail: "山 (पहाड़), 川 (नदी), 田 (धान का खेत), 大 (बड़ा), 小 (छोटा), 中 (बीच)।" },
              ja: { title: "基本の漢字2 - 自然（しぜん）と大きさ", detail: "山、川、田、大、小、中。" } },
            { n: 29, dateEn: "Mon 4 Jan", dateHi: "सोम 4 जन", dateJa: "1月4日（月）",
              en: { title: "A full conversation", detail: "Role-play: introduce yourself → buy something in a shop → say thank you. All 30 days in one scene." },
              hi: { title: "एक पूरी बातचीत", detail: "रोल-प्ले: अपना परिचय → दुकान पर कुछ खरीदना → धन्यवाद। 30 दिन की पूरी सीख, एक ही सीन में।" },
              ja: { title: "全部の会話（かいわ）", detail: "ロールプレイ: 自己紹介 → 店で買う → ありがとうを言う。30日の全部が1つの場面（ばめん）に。" } },
            { n: 30, dateEn: "Tue 5 Jan", dateHi: "मंगल 5 जन", dateJa: "1月5日（火）",
              en: { title: "Final test + your next step", detail: "Post your introduction + 3 sentences in the comments. Completed all 30 days? Your next step is the N5 roadmap." },
              hi: { title: "फ़ाइनल टेस्ट + आपका अगला कदम", detail: "अपना परिचय + 3 वाक्य कमेंट करें। 30/30 दिन पूरे किए? आपका अगला कदम है N5 का रोडमैप।" },
              ja: { title: "最後のテスト + あなたの次のステップ", detail: "あなたの紹介 + 3つの文をコメントに書いてください。30日全部を完成しましたか？あなたの次のステップはN5のロードマップです。" } }
          ]
        }
      ];

      var STR = {
        en: {
          brandSub: "Complete Guide to Japan",
          heroTitle: "Going to Japan? <span class=\"accent\">Read this first!</span>",
          heroLede: "Visas, jobs, exams and daily life - everything in simple words, so nobody can cheat you. Written by an Indian who lives and works in Japan.",
          heroSearchPh: "Search anything - visa, salary, exam, kaigo…",
          heroSearchHint: "Start typing - try “kaigo”, “वेतन”, “prometric” or “emergency”.",
          heroNoResults: "No guide for that yet. Browse the topics below - or ask Shivam on Instagram; good questions become new guides.",
          heroTopicWord: "Topic",
          heroBtnGuides: "Read the guides",
          heroBtnLinks: "Official links",
          heroKicker: "100% Free · No Agent Needed",
          introKicker: "The man behind the guide",
          introTitle: "Japan, explained from inside",
          topicsKicker: "Start here",
          guidesKicker: "Every Reel, written down",
          linksKicker: "No middlemen",
          talkKicker: "Still confused?",
          talkTitle: "Talk to Shivam",
          whoRole: "An Indian living and working in Okayama, Japan",
          whoText: "I live and work in Japan, and I explain this country from inside - in simple language, the way I would explain it to my own brother. What I say in a Reel, you will find written here.",
          promise: "Free for everyone, always. No fees, no agents - only official information in simple words.",
          emgTitle: "Emergency in Japan",
          emgPolice: "Police",
          emgFire: "Fire & Ambulance",
          emgFree: "Free · 24 hours · any phone",
          topicsTitle: "Browse by topic",
          guidesTitle: "Guides",
          guidesSub: "Simple answer first, then step by step.",
          searchPh: "Search guides - try “wage”, “exam”, “kaigo”…",
          allTopics: "All",
          guidesWord: "guides",
          stepsWord: "steps",
          trustLine: "✓ Every fact from an official source · ✓ Facts checked: November 2026 · ✓ No money, no agents",
          talkDm: "📩 DM Shivam",
          guideWord: "guide",
          openGuide: "Open guide",
          noResults: "No guide matches that search yet. Try “visa”, “wage” or “exam” - or ask Shivam on Instagram; good questions become new guides.",
          linksTitle: "Official Links",
          linksSub: "Go straight to the government source.",
          followTitle: "Watch the Reels on Instagram",
          followText: "No problem at all. Shivam himself lives in Japan and answers questions personally. Do not feel shy - just send a message.",
          aboutTitle: "Why this guide exists",
          aboutText: "Too many Indians in Japan suffer or get cheated only because nobody explained the rules to them in simple words. This guide fixes that - every topic from Shivam's Reels, written down with the official source, free for everyone, always.",
          aboutBtn: "Follow @shivam_bhai_japan",
          footFree: "Free for everyone, always.",
          footNote: "General information, not legal advice - always check the official source for your case.",
          backAll: "All guides",
          simpleAnswer: "The simple answer",
          stepByStep: "Step by step",
          trapsTitle: "Common traps",
          reelTitle: "Watch the Reel",
          reelText: "Shivam explains this exact topic in a short Reel on Instagram - simple Hindi, straight from Japan.",
          reelBtn: "Watch on Instagram",
          pathsKicker: "Just one question",
          pathsTitle: "Where are you right now?",
          pathsSub: "Just tell us this one thing. We show you the right road, step by step.",
          pathStepWord: "Step",
          pathOpen: "Start this path",
          shareBtn: "Share",
          whatsappBtn: "WhatsApp",
          summaryBtn: "Photo summary",
          relatedTitle: "Also useful for you",
          reportBtn: "Something wrong in this guide? Tell Shivam",
          popularLabel: "Most asked:",
          stickyHome: "Home",
          stickyVideo: "Video",
          sourceLabel: "Official source",
          checked: "Facts checked: November 2026",
          disclaimer: "General information, not legal advice - always check the official source for your case.",
          prevGuide: "Previous guide",
          nextGuide: "Next guide",
          courseKicker: "New free course",
          courseBannerTitle: "Try Japan for 30 Days",
          courseTitle: "Try Japan for 30 Days",
          courseTag: "Free course · Starts 7 Dec 2026",
          courseBannerText: "Watching Japan videos and dreaming of coming here? Learn survival Japanese first - one small lesson a day for 30 days: Hiragana, Katakana, greetings, the words that work every day, and your first full sentences. Taught by an Indian living in Japan, in simple words.",
          courseDatePill: "Day 1 · Mon 7 Dec 2026",
          courseMetaFree: "Free · 30 days · 1 lesson a day",
          courseMetaLevel: "Beginner · No book needed",
          courseCtaChart: "See the 30-day chart",
          courseSideNote: "Hiragana · Katakana · Kanji",
          courseBack: "Back to home",
          courseLede: "A free 30-day beginner course for Japan lovers in India who are thinking of coming to Japan. One short Reel lesson every day - basic Hiragana and Katakana, a few useful kanji, greetings, and the verbs, nouns and adjectives you will actually use.",
          coursePromise: "An honest promise: 30 days will not make you fluent. But you will not be lost in a shop, a station or a street in Japan - you will be able to read the scripts, greet people, ask prices and say your first full sentences. No certificate or visa promises - just real, usable Japanese.",
          courseWhoTitle: "Who is this for?",
          courseWho: "You watch videos of life in Japan and think, “maybe me too?” This course takes you from that dream to your first real step - before you spend money or make big decisions, learn the language Japan actually runs on.",
          courseHowTitle: "How it works",
          courseHow: "Day 1 starts Monday, 7 December 2026. Every day, one 45–75 second Reel lesson on Instagram - never more than 5 new items - with a small homework in the comments. Miss a day? Just continue the next day; the series does not break. All 30 lessons are listed below.",
          courseChartTitle: "The 30-day chart",
          coursePending: "Reel coming",
          courseDayWord: "Day",
          courseFollowTitle: "Watch the daily lessons",
          courseFollowText: "Every lesson is a free Reel on Instagram. Follow now so Day 1 does not pass you by - and send this course to one friend who dreams of Japan.",
          courseFollowBtn: "Follow @shivam_bhai_japan"
        ,
          linksWord: "links",
          comingSoon: "Guide coming soon",
          minWageJapan: "Minimum wage · Japan"},
        hi: {
          brandSub: "जापान की पूरी गाइड",
          heroTitle: "जापान जाना है? <span class=\"accent\">पहले ये पढ़ो!</span>",
          heroLede: "वीज़ा, नौकरी, परीक्षा और रोज़ की ज़िंदगी - सब कुछ आसान शब्दों में, ताकि कोई आपको ठग न सके। ये गाइड जापान में रहने वाले एक भारतीय ने लिखी है।",
          heroSearchPh: "कुछ भी खोजें - वीज़ा, वेतन, परीक्षा, kaigo…",
          heroSearchHint: "लिखना शुरू करें - “kaigo”, “वेतन”, “prometric” या “emergency” लिखकर देखें।",
          heroNoResults: "इसके लिए अभी कोई गाइड नहीं है। नीचे दिए विषय देख लें - या Instagram पर शिवम से पूछें; अच्छे सवाल ही नई गाइड बनते हैं।",
          heroTopicWord: "विषय",
          heroBtnGuides: "गाइड पढ़ें",
          heroBtnLinks: "आधिकारिक लिंक",
          heroKicker: "100% मुफ़्त · कोई Agent नहीं चाहिए",
          introKicker: "इस गाइड के पीछे का इंसान",
          introTitle: "जापान, अंदर से समझाया गया",
          topicsKicker: "यहाँ से शुरू करें",
          guidesKicker: "हर Reel, लिखकर",
          linksKicker: "कोई बिचौलिया नहीं",
          talkKicker: "फिर भी समझ न आए?",
          talkTitle: "शिवम से बात करें",
          whoRole: "ओकायामा, जापान में रहने और काम करने वाला एक भारतीय",
          whoText: "मैं जापान में रहता और काम करता हूँ, और इस देश को अंदर से समझाता हूँ - आसान भाषा में, जैसे अपने भाई को समझाता। जो बात मैं Reel में कहता हूँ, वही यहाँ लिखी मिलेगी।",
          promise: "सबके लिए मुफ़्त, हमेशा। कोई फीस नहीं, कोई एजेंट नहीं - सिर्फ़ आधिकारिक जानकारी, आसान शब्दों में।",
          emgTitle: "जापान में इमरजेंसी",
          emgPolice: "पुलिस",
          emgFire: "आग और एम्बुलेंस",
          emgFree: "मुफ़्त · 24 घंटे · किसी भी फोन से",
          topicsTitle: "विषय चुनें",
          guidesTitle: "गाइड",
          guidesSub: "पहले आसान जवाब, फिर स्टेप-बाय-स्टेप।",
          searchPh: "गाइड खोजें - “वेतन”, “परीक्षा”, “kaigo” लिखकर देखें…",
          allTopics: "सभी",
          guidesWord: "गाइड",
          stepsWord: "स्टेप",
          trustLine: "✓ हर जानकारी official source से · ✓ Facts checked: नवंबर 2026 · ✓ कोई पैसा नहीं, कोई agent नहीं",
          talkDm: "📩 DM करें",
          guideWord: "गाइड",
          openGuide: "गाइड खोलें",
          noResults: "इस खोज से कोई गाइड नहीं मिली। “वीज़ा”, “वेतन” या “परीक्षा” लिखकर देखें - या Instagram पर शिवम से पूछें; अच्छे सवाल ही नई गाइड बनते हैं।",
          linksTitle: "आधिकारिक लिंक",
          linksSub: "सीधे सरकारी स्रोत पर जाएँ।",
          followTitle: "Instagram पर Reels देखें",
          followText: "कोई बात नहीं। शिवम ख़ुद जापान में रहते हैं और सवालों के जवाब ख़ुद देते हैं। शर्माइए मत - बस message भेज दीजिए।",
          aboutTitle: "यह गाइड क्यों बनी",
          aboutText: "जापान में बहुत से भारतीय सिर्फ़ इसलिए परेशान होते हैं या ठगे जाते हैं क्योंकि किसी ने उन्हें नियम आसान शब्दों में समझाए ही नहीं। यह गाइड वही कमी दूर करती है - शिवम की Reels का हर विषय, आधिकारिक स्रोत के साथ लिखा हुआ, सबके लिए मुफ़्त, हमेशा।",
          aboutBtn: "@shivam_bhai_japan को फॉलो करें",
          footFree: "सबके लिए मुफ़्त, हमेशा।",
          footNote: "यह सामान्य जानकारी है, कानूनी सलाह नहीं - अपने मामले के लिए हमेशा आधिकारिक स्रोत ज़रूर देखें।",
          backAll: "सभी गाइड",
          simpleAnswer: "आसान जवाब",
          stepByStep: "स्टेप-बाय-स्टेप",
          trapsTitle: "आम गलतियाँ और जाल",
          reelTitle: "Reel देखें",
          reelText: "शिवम इसी विषय को Instagram पर एक छोटी Reel में समझाते हैं - आसान हिंदी में, सीधे जापान से।",
          reelBtn: "Instagram पर देखें",
          pathsKicker: "सिर्फ़ एक सवाल",
          pathsTitle: "आप अभी कहाँ हैं?",
          pathsSub: "बस ये एक बात बताइए। हम आपको सही रास्ता दिखाएँगे, कदम-दर-कदम।",
          pathStepWord: "कदम",
          pathOpen: "ये रास्ता शुरू करें",
          shareBtn: "शेयर करें",
          whatsappBtn: "WhatsApp",
          summaryBtn: "फोटो सारांश",
          relatedTitle: "ये भी आपके काम आएगा",
          reportBtn: "इस guide में कुछ गलत लगा? Shivam को बताएँ",
          popularLabel: "सबसे ज़्यादा पूछे गए:",
          stickyHome: "होम",
          stickyVideo: "वीडियो",
          sourceLabel: "आधिकारिक स्रोत",
          checked: "जानकारी जाँची गई: नवंबर 2026",
          disclaimer: "यह सामान्य जानकारी है, कानूनी सलाह नहीं - अपने मामले के लिए हमेशा आधिकारिक स्रोत ज़रूर देखें।",
          prevGuide: "पिछली गाइड",
          nextGuide: "अगली गाइड",
          courseKicker: "नया मुफ़्त कोर्स",
          courseBannerTitle: "Try Japan - 30 Din",
          courseTitle: "Try Japan - 30 Din",
          courseTag: "मुफ़्त कोर्स · 7 दिसंबर 2026 से शुरू",
          courseBannerText: "जापान की वीडियोज़ देखकर यहाँ आने का सपना देख रहे हैं? पहले survival Japanese सीखें - 30 दिन, रोज़ एक छोटा lesson: Hiragana, Katakana, अभिवादन, रोज़ काम आने वाले शब्द और आपके पहले पूरे वाक्य। जापान में रहने वाला एक भारतीय, आसान शब्दों में सिखाएगा।",
          courseDatePill: "Day 1 · सोमवार 7 दिसंबर 2026",
          courseMetaFree: "मुफ़्त · 30 दिन · रोज़ 1 lesson",
          courseMetaLevel: "शुरुआती · कोई किताब नहीं चाहिए",
          courseCtaChart: "30 दिन का चार्ट देखें",
          courseSideNote: "Hiragana · Katakana · Kanji",
          courseBack: "होम पर वापस",
          courseLede: "भारत में बैठे उन Japan-प्रेमियों के लिए मुफ़्त 30-दिन का शुरुआती कोर्स, जो जापान आने की सोच रहे हैं। रोज़ एक छोटा Reel lesson - बेसिक Hiragana और Katakana, कुछ काम के kanji, अभिवादन, और वे क्रियाएँ, संज्ञाएँ व विशेषण जो असल में काम आएँगे।",
          coursePromise: "एक सच्चा वादा: 30 दिन में आप fluent नहीं होंगे। लेकिन जापान की किसी दुकान, स्टेशन या गली में आप खोए हुए नहीं रहेंगे - आप स्क्रिप्ट पढ़ पाएँगे, अभिवादन कर पाएँगे, दाम पूछ पाएँगे और अपने पहले पूरे वाक्य बोल पाएँगे। कोई सर्टिफिकेट या वीज़ा का वादा नहीं - सिर्फ़ असली, काम आने वाली जापानी।",
          courseWhoTitle: "यह किसके लिए है?",
          courseWho: "आप जापान की ज़िंदगी की वीडियोज़ देखते हैं और सोचते हैं - “शायद मैं भी?” यह कोर्स आपको उस सपने से पहले असली कदम तक ले जाता है - पैसे खर्च करने या बड़े फ़ैसले लेने से पहले, वह भाषा सीखें जिस पर जापान असल में चलता है।",
          courseHowTitle: "यह कैसे चलेगा?",
          courseHow: "Day 1 सोमवार, 7 दिसंबर 2026 से शुरू होगा। रोज़ Instagram पर एक 45–75 सेकंड का Reel lesson - कभी 5 से ज़्यादा नए items नहीं - और कमेंट में एक छोटा-सा होमवर्क। एक दिन छूट जाए? अगले दिन से जारी रखें; सीरीज़ नहीं टूटती। नीचे सभी 30 lessons दिए हैं।",
          courseChartTitle: "30 दिन का चार्ट",
          coursePending: "Reel जल्द आएगी",
          courseDayWord: "दिन",
          courseFollowTitle: "रोज़ के lessons देखें",
          courseFollowText: "हर lesson Instagram पर एक मुफ़्त Reel है। अभी फॉलो करें ताकि Day 1 छूट न जाए - और यह कोर्स उस एक दोस्त को भेजें जो जापान का सपना देखता है।",
          courseFollowBtn: "@shivam_bhai_japan को फॉलो करें"
        ,
          linksWord: "लिंक",
          comingSoon: "गाइड जल्द आ रही है",
          minWageJapan: "न्यूनतम वेतन · जापान"},
        ja: {
          brandSub: "日本完全ガイド",
          heroTitle: "日本に行きますか？ <span class=\\\"accent\\\">まず読んでください！</span>",
          heroLede: "ビザ、仕事、試験、毎日の生活 - 全部、簡単な言葉で。誰にもだまされません。日本に住んで働くインド人が書きました。",
          heroSearchPh: "何でも検索 - ビザ、給料、試験、介護（かいご）…",
          heroSearchHint: "入力を始めてください - 「介護（かいご）」「給料（きゅうりょう）」「prometric」「緊急（きんきゅう）」など。",
          heroNoResults: "そのガイドはまだありません。下のトピックを見てください。またはInstagramでShivamに聞いてください。いい質問は新しいガイドになります。",
          heroTopicWord: "トピック",
          heroBtnGuides: "ガイドを読む",
          heroBtnLinks: "公式リンク",
          heroKicker: "100%無料（むりょう）・エージェント不要（ふよう）",
          introKicker: "このガイドを作った人",
          introTitle: "日本を中から説明します",
          topicsKicker: "ここから始めてください",
          guidesKicker: "すべてのリールを文字にしました",
          linksKicker: "仲介者（ちゅうかいしゃ）はいません",
          talkKicker: "まだ分かりませんか？",
          talkTitle: "Shivamに話してください",
          whoRole: "日本の岡山（おかやま）に住んで働くインド人",
          whoText: "私は日本に住んで働いています。この国を中から説明します。自分の兄弟に説明するように、簡単な言葉で。リールで話したことは、全部ここに書いてあります。",
          promise: "誰でも、いつでも無料。お金はいりません。エージェントはいりません。公式の情報を簡単な言葉で。",
          emgTitle: "日本の緊急",
          emgPolice: "警察（けいさつ）",
          emgFire: "火事（かじ）・救急車（きゅうきゅうしゃ）",
          emgFree: "無料・24時間・どの電話でも",
          topicsTitle: "トピックから探す",
          guidesTitle: "ガイド",
          guidesSub: "最初に簡単な答え、そのあと順番に説明します。",
          searchPh: "ガイドを検索 - 「給料（きゅうりょう）」「試験」「介護（かいご）」など…",
          allTopics: "全部",
          guidesWord: "ガイド",
          stepsWord: "ステップ",
          trustLine: "✓ すべての情報は公式の情報元から · ✓ 確認した日: 2026年11月 · ✓ お金はいりません、エージェントはいりません",
          talkDm: "📩 ShivamにDM",
          guideWord: "ガイド",
          openGuide: "ガイドを開く",
          noResults: "その検索のガイドはまだありません。「ビザ」「給料（きゅうりょう）」「試験」で試してください。またはInstagramでShivamに聞いてください。いい質問は新しいガイドになります。",
          linksTitle: "公式リンク",
          linksSub: "政府（せいふ）の情報元へ直接（ちょくせつ）行ってください。",
          followTitle: "Instagramでリールを見る",
          followText: "大丈夫（だいじょうぶ）です。Shivamは日本に住んでいて、自分で質問に答えます。遠慮（えんりょ）しないで、メッセージを送ってください。",
          aboutTitle: "このガイドがある理由",
          aboutText: "日本にいる多くのインド人が困ったり、だまされたりします。理由は1つだけです。誰もルールを簡単な言葉で説明しなかったからです。このガイドがそれを直します。Shivamのリールの全部のトピックを、公式の情報元と一緒に書きました。誰でも、いつでも無料です。",
          aboutBtn: "@shivam_bhai_japanをフォロー",
          footFree: "誰でも、いつでも無料です。",
          footNote: "一般の情報です。法律のアドバイスではありません。あなたの場合は公式の情報を確認してください。",
          backAll: "すべてのガイド",
          simpleAnswer: "簡単な答え",
          stepByStep: "順番に説明",
          trapsTitle: "気をつけて！",
          reelTitle: "リールを見る",
          reelText: "ShivamはこのトピックをInstagramの短いリールで説明しています。簡単なヒンディー語で、日本から直接。",
          reelBtn: "Instagramで見る",
          pathsKicker: "質問は1つだけ",
          pathsTitle: "あなたは今、どこにいますか？",
          pathsSub: "これだけ教えてください。正しい道を順番に教えます。",
          pathStepWord: "ステップ",
          pathOpen: "この道を始める",
          shareBtn: "シェア",
          whatsappBtn: "WhatsApp",
          summaryBtn: "写真のまとめ",
          relatedTitle: "あなたに役立つガイド",
          reportBtn: "このガイドにまちがいがありますか？Shivamに教えてください",
          popularLabel: "よく聞かれること:",
          stickyHome: "ホーム",
          stickyVideo: "動画",
          sourceLabel: "公式の情報元",
          checked: "確認した日: 2026年11月",
          disclaimer: "一般の情報です。法律のアドバイスではありません。あなたの場合は公式の情報を確認してください。",
          prevGuide: "前のガイド",
          nextGuide: "次のガイド",
          courseKicker: "新しい無料コース",
          courseBannerTitle: "Try Japan for 30 Days",
          courseTitle: "Try Japan for 30 Days",
          courseTag: "無料コース · 2026年12月7日スタート",
          courseBannerText: "日本の動画を見て、ここに来る夢を見ていますか？まず生きるための日本語を勉強してください。1日1つの小さいレッスン、30日間: ひらがな、カタカナ、あいさつ、毎日使う言葉、あなたの最初の文。日本に住むインド人が、簡単な言葉で教えます。",
          courseDatePill: "1日目 · 2026年12月7日（月）",
          courseMetaFree: "無料 · 30日 · 1日1レッスン",
          courseMetaLevel: "初心者（しょしんしゃ）· 本はいりません",
          courseCtaChart: "30日の表を見る",
          courseSideNote: "ひらがな · カタカナ · 漢字（かんじ）",
          courseBack: "ホームに戻る",
          courseLede: "日本に来たいと考えている、インドの日本好きのための無料の30日初心者コースです。毎日1つの短いリールのレッスン - 基本のひらがなとカタカナ、役立つ漢字、あいさつ、そして本当に使う動詞（どうし）、名詞（めいし）、形容詞（けいようし）。",
          coursePromise: "正直（しょうじき）な約束: 30日でペラペラにはなりません。でも日本の店、駅、道で迷いません。文字が読めて、あいさつができて、値段（ねだん）が聞けて、最初の文が言えます。証明書（しょうめいしょ）やビザの約束はありません。本当に使える日本語だけです。",
          courseWhoTitle: "誰のためですか？",
          courseWho: "日本の生活の動画を見て「私も、もしかして？」と思いますか？このコースは、その夢から本当の最初の一歩まで連れて行きます。お金を使う前、大きい決断（けつだん）の前に、日本が本当に使っている言葉を勉強してください。",
          courseHowTitle: "方法（ほうほう）",
          courseHow: "1日目は2026年12月7日（月）に始まります。毎日、Instagramで45-75秒のリールのレッスンが1つ。新しいものは5つまで。小さい宿題（しゅくだい）がコメントにあります。1日休んでも大丈夫。次の日に続けてください。シリーズは壊れません。30のレッスン全部が下にあります。",
          courseChartTitle: "30日の表",
          coursePending: "リールは近日公開（きんじつこうかい）",
          courseDayWord: "日目",
          courseFollowTitle: "毎日のレッスンを見る",
          courseFollowText: "すべてのレッスンはInstagramの無料のリールです。今フォローしてください。1日目を逃（のが）しません。そして、日本の夢を見る友達1人にこのコースを送ってください。",
          courseFollowBtn: "@shivam_bhai_japanをフォロー",
          linksWord: "リンク",
          comingSoon: "ガイドは近日公開",
          minWageJapan: "最低賃金（さいていちんぎん）・日本"
        }
      };
