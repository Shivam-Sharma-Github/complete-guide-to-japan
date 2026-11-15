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
          hi: { name: "वीज़ा", desc: "TITP, SSW-1, SSW-2, Ikusei Shuro और Kaigo स्टेटस - हर दरवाज़ा, आसान भाषा में।" } },
        { id: "jobs", icon: "pen",
          en: { name: "Jobs & Interviews", desc: "Company Sach - what a real Japanese hiring company looks for, interview mistakes, and the apply-to-offer process." },
          hi: { name: "नौकरियाँ और इंटरव्यू", desc: "Company Sach - एक असली जापानी hiring कंपनी ने ख़ुद बताया: कंपनी क्या देखती है, इंटरव्यू की ग़लतियाँ और apply से offer तक का पूरा process।" } },
        { id: "exams", icon: "pen",
          en: { name: "Exams & Tests", desc: "Prometric booking, SSW skill tests and the JFT-Basic Japanese test." },
          hi: { name: "परीक्षाएँ", desc: "Prometric बुकिंग, SSW स्किल टेस्ट और JFT-Basic जापानी टेस्ट।" } },
        { id: "help", icon: "shield",
          en: { name: "Problem? Get Help", desc: "Where to report a problem, who helps you, and the emergency and help numbers - 110, 119, #9110 and 188." },
          hi: { name: "परेशानी? मदद लें", desc: "कहाँ रिपोर्ट करें, कौन मदद करता है, और इमरजेंसी व मदद वाले नंबर - 110, 119, #9110 और 188।" } },
        { id: "money", icon: "yen",
          en: { name: "Money & Life", desc: "Minimum wage, payslips and what your salary really means." },
          hi: { name: "पैसा और ज़िंदगी", desc: "न्यूनतम वेतन, पे-स्लिप और आपकी सैलरी का असली मतलब।" } },
        { id: "links", icon: "link",
          en: { name: "Official Links", desc: "Every official government link in one place." },
          hi: { name: "आधिकारिक लिंक", desc: "सभी आधिकारिक सरकारी लिंक एक ही जगह।" } }
      ];

      var GUIDES = [
        {
          id: "ssw-titp-visas", section: "visas",
          keywords: "visa visas ssw titp work route training trainee skilled worker welding shipbuilding वीज़ा वीजा वर्क रूट ट्रेनिंग प्रशिक्षु नौकरी काम",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "report-a-problem", section: "help",
          keywords: "problem report help otit labour office complaint unpaid salary overtime trouble परेशानी समस्या रिपोर्ट मदद शिकायत वेतन नहीं मिला ओवरटाइम",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "emergency-contacts", section: "help",
          keywords: "emergency police ambulance fire 110 119 118 coast guard danger accident help number phone 188 9110 consumer centre center shohi seikatsu shopping fraud scam contract non emergency police consultation इमरजेंसी आपातकाल पुलिस एम्बुलेंस आग खतरा दुर्घटना नंबर फोन उपभोक्ता केंद्र खरीदारी धोखाधड़ी फ्रॉड सलाह गैर इमरजेंसी तटरक्षक",
          source: { label: "Immigration Services Agency - isa.go.jp", url: "https://www.isa.go.jp" },
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
          }
        },
        {
          id: "prometric-registration", section: "exams",
          keywords: "prometric exam test booking jft-basic jft japanese test registration skill test परीक्षा टेस्ट बुकिंग रजिस्ट्रेशन जापानी परीक्षा पासपोर्ट",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "ssw2-free-books", section: "exams",
          keywords: "ssw-2 ssw2 books free books book kitab किताब किताबें study material textbook sample questions jaim otaff maff manufacturing food agriculture preparation मुफ़्त पढ़ाई तैयारी सरकारी एग्ज़ाम",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "minimum-wage", section: "money",
          keywords: "minimum wage salary pay payslip money yen wage per hour prefecture pension tax वेतन न्यूनतम वेतन सैलरी पैसा तनख्वाह पेमेंट पेंशन टैक्स",
          source: { label: "Ministry of Health, Labour and Welfare - mhlw.go.jp", url: "https://www.mhlw.go.jp" },
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
          }
        },
        {
          id: "titp-ending-ikusei-shuro", section: "visas",
          keywords: "titp ending ikusei shuro 2027 new system visa change ट्रेनिंग खत्म नया सिस्टम वीज़ा बदलाव",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "ssw1-to-ssw2", section: "visas",
          keywords: "ssw2 ssw-2 ssw1 upgrade family spouse children five years renew वीज़ा अपग्रेड परिवार पत्नी बच्चे पाँच साल रिन्यू",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "kaigo-other-door", section: "visas",
          keywords: "kaigo care nursing care worker fukushishi exam nurse elderly देखभाल नर्सिंग केयर वर्कर परीक्षा बुज़ुर्ग सेवा",
          source: { label: "Kaigo Fukushishi Exam Centre - sssc.or.jp", url: "https://www.sssc.or.jp" },
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
          }
        },
        {
          id: "agent-money-system", section: "money",
          keywords: "agent money fee fees lakh commission supervising organisation deposit guarantee penalty contract itemised bill agent paisa एजेंट पैसा फीस लाख कमीशन डिपॉज़िट गारंटी पेनल्टी कॉन्ट्रैक्ट बिल",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "free-japanese-classes", section: "money",
          keywords: "free japanese classes nihongo kyoshitsu learn japanese city hall shiyakusho international association coaching मुफ़्त जापानी क्लास जापानी सीखें सिटी हॉल कोचिंग भाषा",
          source: { label: "Agency for Cultural Affairs - bunka.go.jp", url: "https://www.bunka.go.jp" },
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
          }
        },
        {
          id: "welding-job-japan", section: "visas",
          keywords: "welding welder shipbuilding ship machinery classnk exam shipyard setouchi salary वेल्डिंग वेल्डर जहाज़ शिपयार्ड परीक्षा वेतन",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "bsc-nursing-roadmap", section: "visas",
          keywords: "nursing bsc nursing nurse inc approved kaigo roadmap care worker degree नर्सिंग नर्स डिग्री केयर वर्कर रोडमैप कॉलेज",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "company-sach-1-what-companies-want", section: "jobs",
          keywords: "company sach part 1 hiring company what companies want japanese adaptability skill fourth valley connect job interview priority ranking naukri job कंपनी सच नौकरी इंटरव्यू जापानी स्किल कंपनी क्या देखती है हायरिंग",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "company-sach-2-n4-n3-n2", section: "jobs",
          keywords: "company sach part 2 n4 n3 n2 jlpt jft visa naukri job engineer visa gijinkoku japanese level कंपनी सच वीज़ा नौकरी जापानी लेवल इंजीनियर वीज़ा",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "company-sach-3-interview-mistakes", section: "jobs",
          keywords: "company sach part 3 interview mistakes reject indian candidates listening overselling fast speaking interrupt कंपनी सच इंटरव्यू ग़लती ग़लतियाँ रिजेक्ट सुनना तेज़ बोलना",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "company-sach-4-apply-to-offer", section: "jobs",
          keywords: "company sach part 4 apply offer process document screening resume rirekisho interview support company कंपनी सच अप्लाई ऑफ़र प्रोसेस दस्तावेज़ स्क्रीनिंग रिज़्यूमे",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "company-sach-5-one-advice", section: "jobs",
          keywords: "company sach part 5 one advice japanese six month plan 6 months learn japanese कंपनी सच सलाह जापानी छह महीने प्लान सीखें",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          }
        },
        {
          id: "resume-samples-2-styles", section: "jobs",
          keywords: "resume sample rirekisho shokumu keirekisho cv japanese resume format sample example履歴書 職務経歴書 रिज़्यूमे नमूना सैंपल जापानी रिज़्यूमे बायोडाटा",
          source: { label: "SSW Official Portal - ssw.go.jp", url: "https://www.ssw.go.jp" },
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
          guides: ["ssw-titp-visas", "prometric-registration", "ssw2-free-books", "free-japanese-classes", "company-sach-2-n4-n3-n2", "resume-samples-2-styles", "company-sach-4-apply-to-offer", "agent-money-system"]
        },
        {
          id: "in-japan",
          en: { name: "I am already in Japan", desc: "Life inside Japan: emergency numbers, problems, salary rules, and your next visa step." },
          hi: { name: "मैं पहले से Japan में हूँ", desc: "Japan के अंदर की ज़िंदगी: emergency नंबर, परेशानियाँ, वेतन के नियम, और आपका अगला visa कदम।" },
          guides: ["emergency-contacts", "report-a-problem", "minimum-wage", "titp-ending-ikusei-shuro", "ssw1-to-ssw2", "kaigo-other-door"]
        },
        {
          id: "job-hunt",
          en: { name: "I am looking for a job in Japan", desc: "What companies really want, the mistakes that reject you, and the resume that gets you called." },
          hi: { name: "मुझे Japan में नौकरी चाहिए", desc: "कंपनियाँ असल में क्या चाहती हैं, कौन-सी गलतियाँ reject कराती हैं, और वो resume जो आपको बुलावा दिलाए।" },
          guides: ["company-sach-1-what-companies-want", "company-sach-2-n4-n3-n2", "company-sach-3-interview-mistakes", "resume-samples-2-styles", "company-sach-4-apply-to-offer", "company-sach-5-one-advice", "welding-job-japan", "bsc-nursing-roadmap"]
        }
      ];

      var LINKS = [
        { label: "SSW Official Portal", url: "https://www.ssw.go.jp", host: "ssw.go.jp",
          en: "Visas, tests and rules for Specified Skilled Workers - the main official source.",
          hi: "SSW वर्करों के लिए वीज़ा, टेस्ट और नियम - मुख्य आधिकारिक स्रोत।" },
        { label: "Kaigo Fukushishi Exam (Official)", url: "https://www.sssc.or.jp", host: "sssc.or.jp",
          en: "The official exam centre for the national care worker exam.",
          hi: "राष्ट्रीय केयर वर्कर परीक्षा का आधिकारिक परीक्षा केंद्र।" },
        { label: "Immigration Services Agency", url: "https://www.isa.go.jp", host: "isa.go.jp",
          en: "Residence status, procedures and applications.",
          hi: "रेज़िडेंस स्टेटस, प्रक्रियाएँ और आवेदन।" },
        { label: "Ministry of Health, Labour and Welfare", url: "https://www.mhlw.go.jp", host: "mhlw.go.jp",
          en: "Labour rules, minimum wage by prefecture, health and welfare.",
          hi: "श्रम नियम, प्रान्त के हिसाब से न्यूनतम वेतन, स्वास्थ्य और कल्याण।" },
        { label: "Consumer Affairs Agency - Hotline 188", url: "https://www.caa.go.jp", host: "caa.go.jp",
          en: "Shopping and contract problems - call the Consumer Hotline on 188 to reach your nearest Consumer Centre.",
          hi: "खरीदारी और कॉन्ट्रैक्ट की परेशानी - Consumer Hotline 188 पर कॉल करें, सबसे पास वाला Consumer Centre मिलेगा।" }
      ];

      var COURSE_ALIASES = "try japan course 30 days 30 din hiragana katakana kanji learn japanese japanese seekho japanese course beginner nihongo survival japanese जापानी सीखें जापानी सीखो कोर्स तीस दिन हिरागाना काताकाना";

      var COURSE_WEEKS = [
        {
          en: { name: "Week 1 - Hiragana: Japan's ABC", dates: "7–13 Dec" },
          hi: { name: "हफ़्ता 1 - Hiragana: जापान की ABC", dates: "7–13 दिसंबर" },
          days: [
            { n: 1, dateEn: "Mon 7 Dec", dateHi: "सोम 7 दिस",
              en: { title: "Three scripts + vowels", detail: "Japanese uses 3 scripts - Hiragana, Katakana and Kanji. No fear: start with the 5 vowels - あ a, い i, う u, え e, お o." },
              hi: { title: "तीन स्क्रिप्ट + स्वर (Vowels)", detail: "जापानी में 3 स्क्रिप्ट होती हैं - Hiragana, Katakana और Kanji। डर ख़त्म: शुरुआत 5 स्वरों से - あ a, い i, う u, え e, お o।" } },
            { n: 2, dateEn: "Tue 8 Dec", dateHi: "मंगल 8 दिस",
              en: { title: "Ka row + Sa row", detail: "かきくけこ - ka, ki, ku, ke, ko · さしすせそ - sa, shi, su, se, so." },
              hi: { title: "Ka पंक्ति + Sa पंक्ति", detail: "かきくけこ - ka, ki, ku, ke, ko · さしすせそ - sa, shi, su, se, so।" } },
            { n: 3, dateEn: "Wed 9 Dec", dateHi: "बुध 9 दिस",
              en: { title: "Ta row + Na row", detail: "たちつてと - ta, chi, tsu, te, to · なにぬねの - na, ni, nu, ne, no." },
              hi: { title: "Ta पंक्ति + Na पंक्ति", detail: "たちつてと - ta, chi, tsu, te, to · なにぬねの - na, ni, nu, ne, no।" } },
            { n: 4, dateEn: "Thu 10 Dec", dateHi: "गुरु 10 दिस",
              en: { title: "Ha row + Ma row", detail: "はひふへほ - ha, hi, fu, he, ho · まみむめも - ma, mi, mu, me, mo." },
              hi: { title: "Ha पंक्ति + Ma पंक्ति", detail: "はひふへほ - ha, hi, fu, he, ho · まみむめも - ma, mi, mu, me, mo।" } },
            { n: 5, dateEn: "Fri 11 Dec", dateHi: "शुक्र 11 दिस",
              en: { title: "Ya, Ra + Wa rows", detail: "やゆよ - ya, yu, yo · らりるれろ - ra, ri, ru, re, ro · わをん - wa, wo, n. Hiragana complete!" },
              hi: { title: "Ya, Ra + Wa पंक्तियाँ", detail: "やゆよ - ya, yu, yo · らりるれろ - ra, ri, ru, re, ro · わをん - wa, wo, n। Hiragana पूरा!" } },
            { n: 6, dateEn: "Sat 12 Dec", dateHi: "शनि 12 दिस",
              en: { title: "Dakuten - the ten-ten marks", detail: "Two small marks change the sound: か → が, さ → ざ, た → だ, は → ば → ぱ." },
              hi: { title: "Dakuten - टेन-टेन वाले निशान", detail: "दो छोटे निशान आवाज़ बदल देते हैं: か → が, さ → ざ, た → だ, は → ば → ぱ।" } },
            { n: 7, dateEn: "Sun 13 Dec", dateHi: "रवि 13 दिस",
              en: { title: "Week 1 test - read 10 words", detail: "Read aloud: あい (love), すし, さくら, ねこ, うみ, かぜ, ゆき, はな, つき, ほし. Post your score in the comments." },
              hi: { title: "हफ़्ता 1 टेस्ट - 10 शब्द पढ़ें", detail: "ज़ोर से पढ़ें: あい (प्यार), すし, さくら, ねこ, うみ, かぜ, ゆき, はな, つき, ほし। अपना स्कोर कमेंट में लिखें।" } }
          ]
        },
        {
          en: { name: "Week 2 - Katakana + First Words", dates: "14–20 Dec" },
          hi: { name: "हफ़्ता 2 - Katakana + पहले शब्द", dates: "14–20 दिसंबर" },
          days: [
            { n: 8, dateEn: "Mon 14 Dec", dateHi: "सोम 14 दिस",
              en: { title: "Katakana - the script for foreign words", detail: "Katakana writes words that came from other languages. Start: アイウエオ, カキクケコ - now read コーヒー (coffee)." },
              hi: { title: "Katakana - विदेशी शब्दों की स्क्रिप्ट", detail: "दूसरी भाषाओं से आए शब्द Katakana में लिखे जाते हैं। शुरुआत: アイウエオ, カキクケコ - अब コーヒー (coffee) पढ़कर देखें।" } },
            { n: 9, dateEn: "Tue 15 Dec", dateHi: "मंगल 15 दिस",
              en: { title: "Katakana 2 + your name in Japanese", detail: "The サ to ノ rows - then write your own name in Katakana and post it as homework." },
              hi: { title: "Katakana 2 + जापानी में आपका नाम", detail: "サ से ノ तक की पंक्तियाँ - फिर अपना नाम Katakana में लिखें और होमवर्क के तौर पर कमेंट करें।" } },
            { n: 10, dateEn: "Wed 16 Dec", dateHi: "बुध 16 दिस",
              en: { title: "Katakana complete - read a menu", detail: "The ハ to ワ rows. Read real words: ラーメン (ramen), ビール (beer), テレビ (TV), ホテル (hotel)." },
              hi: { title: "Katakana पूरा - मेनू पढ़ें", detail: "ハ से ワ तक की पंक्तियाँ। असली शब्द पढ़ें: ラーメン (ramen), ビール (beer), テレビ (TV), ホテル (hotel)।" } },
            { n: 11, dateEn: "Thu 17 Dec", dateHi: "गुरु 17 दिस",
              en: { title: "Greetings 1", detail: "おはようございます (good morning), こんにちは (hello), こんばんは (good evening), おやすみなさい (good night)." },
              hi: { title: "अभिवादन 1", detail: "おはようございます (सुप्रभात), こんにちは (नमस्ते), こんばんは (शुभ संध्या), おやすみなさい (शुभ रात्रि)।" } },
            { n: 12, dateEn: "Fri 18 Dec", dateHi: "शुक्र 18 दिस",
              en: { title: "Greetings 2 - the 4 most useful", detail: "ありがとうございます (thank you), すみません (excuse me / sorry), おねがいします (please), はい / いいえ (yes / no)." },
              hi: { title: "अभिवादन 2 - सबसे काम के 4", detail: "ありがとうございます (धन्यवाद), すみません (माफ़ कीजिए / सॉरी), おねがいします (कृपया), はい / いいえ (हाँ / नहीं)।" } },
            { n: 13, dateEn: "Sat 19 Dec", dateHi: "शनि 19 दिस",
              en: { title: "Introduce yourself in Japanese", detail: "はじめまして。___です。インドから きました。よろしく おねがいします。- your full introduction, in Japanese." },
              hi: { title: "जापानी में अपना परिचय दें", detail: "はじめまして。___です。インドから きました。よろしく おねがいします。- आपका पूरा परिचय, जापानी में।" } },
            { n: 14, dateEn: "Sun 20 Dec", dateHi: "रवि 20 दिस",
              en: { title: "Numbers 1–10 + asking a price", detail: "いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう (1–10) + これは いくらですか? (How much is this?)" },
              hi: { title: "नंबर 1–10 + दाम पूछना", detail: "いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう (1–10) + これは いくらですか? (यह कितने का है?)" } }
          ]
        },
        {
          en: { name: "Week 3 - Words That Work", dates: "21–27 Dec" },
          hi: { name: "हफ़्ता 3 - काम के शब्द", dates: "21–27 दिसंबर" },
          days: [
            { n: 15, dateEn: "Mon 21 Dec", dateHi: "सोम 21 दिस",
              en: { title: "Verbs set 1 - everyday life", detail: "たべる (eat), のむ (drink), いく (go), くる (come), みる (see / watch)." },
              hi: { title: "क्रियाएँ सेट 1 - रोज़ की ज़िंदगी", detail: "たべる (खाना), のむ (पीना), いく (जाना), くる (आना), みる (देखना)।" } },
            { n: 16, dateEn: "Tue 22 Dec", dateHi: "मंगल 22 दिस",
              en: { title: "Verbs set 2 - doing words", detail: "かう (buy), はたらく (work), はなす (speak), きく (listen / ask), つくる (make)." },
              hi: { title: "क्रियाएँ सेट 2 - काम की क्रियाएँ", detail: "かう (खरीदना), はたらく (काम करना), はなす (बोलना), きく (सुनना / पूछना), つくる (बनाना)।" } },
            { n: 17, dateEn: "Wed 23 Dec", dateHi: "बुध 23 दिस",
              en: { title: "Everyday nouns", detail: "みず (water), パン (bread), おかね (money), でんしゃ (train), みせ (shop), いえ (home), しごと (work)." },
              hi: { title: "रोज़ के संज्ञा शब्द", detail: "みず (पानी), パン (ब्रेड), おかね (पैसा), でんしゃ (ट्रेन), みせ (दुकान), いえ (घर), しごと (काम)।" } },
            { n: 18, dateEn: "Thu 24 Dec", dateHi: "गुरु 24 दिस",
              en: { title: "Adjectives", detail: "おおきい (big), ちいさい (small), たかい (expensive / high), やすい (cheap), おいしい (tasty), あつい (hot), さむい (cold)." },
              hi: { title: "विशेषण (Adjectives)", detail: "おおきい (बड़ा), ちいさい (छोटा), たかい (महँगा / ऊँचा), やすい (सस्ता), おいしい (स्वादिष्ट), あつい (गर्म), さむい (ठंडा)।" } },
            { n: 19, dateEn: "Fri 25 Dec", dateHi: "शुक्र 25 दिस",
              en: { title: "Time words", detail: "きょう (today), あした (tomorrow), きのう (yesterday), いま (now) + なんじですか? (What time is it?)" },
              hi: { title: "समय वाले शब्द", detail: "きょう (आज), あした (आने वाला कल), きのう (बीता हुआ कल), いま (अभी) + なんじですか? (कितने बजे हैं?)" } },
            { n: 20, dateEn: "Sat 26 Dec", dateHi: "शनि 26 दिस",
              en: { title: "Your first full sentence", detail: "わたしは ___を たべます / のみます / かいます - the simple magic of the polite ~masu form." },
              hi: { title: "आपका पहला पूरा वाक्य", detail: "わたしは ___を たべます / のみます / かいます - विनम्र ~masu रूप का आसान जादू।" } },
            { n: 21, dateEn: "Sun 27 Dec", dateHi: "रवि 27 दिस",
              en: { title: "Week 3 challenge - make 5 sentences", detail: "Make 5 sentences of your own and post them in the comments - the best 5 get read out in the next Reel." },
              hi: { title: "हफ़्ता 3 चैलेंज - 5 वाक्य बनाएँ", detail: "अपने 5 वाक्य बनाएँ और कमेंट में लिखें - सबसे अच्छे 5 अगली Reel में पढ़े जाएँगे।" } }
          ]
        },
        {
          en: { name: "Week 4 - Real Japan", dates: "28 Dec – 5 Jan" },
          hi: { name: "हफ़्ता 4 - असली जापान", dates: "28 दिसंबर – 5 जनवरी" },
          days: [
            { n: 22, dateEn: "Mon 28 Dec", dateHi: "सोम 28 दिस",
              en: { title: "Convenience store survival", detail: "これを ください (this one, please), ふくろは いりません (no bag needed) - and how to answer at the till." },
              hi: { title: "कॉनबिनी (सुविधा स्टोर) में काम चलाएँ", detail: "これを ください (यह दे दीजिए), ふくろは いりません (बैग नहीं चाहिए) - और काउंटर पर जवाब कैसे दें।" } },
            { n: 23, dateEn: "Tue 29 Dec", dateHi: "मंगल 29 दिस",
              en: { title: "Station survival", detail: "___は どこですか? (Where is ___?), きっぷ (ticket), でんしゃ (train), えき (station)." },
              hi: { title: "स्टेशन पर काम चलाएँ", detail: "___は どこですか? (___ कहाँ है?), きっぷ (टिकट), でんしゃ (ट्रेन), えき (स्टेशन)।" } },
            { n: 24, dateEn: "Wed 30 Dec", dateHi: "बुध 30 दिस",
              en: { title: "Restaurant survival", detail: "メニューを ください (menu, please), みずを ください (water, please), おかいけい おねがいします (bill, please), ごちそうさまでした (thank you for the meal)." },
              hi: { title: "रेस्टोरेंट में काम चलाएँ", detail: "メニューを ください (मेनू दीजिए), みずを ください (पानी दीजिए), おかいけい おねがいします (बिल दीजिए), ごちそうさまでした (खाने के लिए धन्यवाद)।" } },
            { n: 25, dateEn: "Thu 31 Dec", dateHi: "गुरु 31 दिस",
              en: { title: "Words for work", detail: "おつかれさまです (the after-work greeting), わかりました (understood), もういちど おねがいします (once more, please)." },
              hi: { title: "काम पर काम आने वाले शब्द", detail: "おつかれさまです (काम के बाद का अभिवादन), わかりました (समझ गया), もういちど おねがいします (एक बार फिर बोलिए)।" } },
            { n: 26, dateEn: "Fri 1 Jan", dateHi: "शुक्र 1 जन",
              en: { title: "Help phrases", detail: "たすけてください (help!), わかりません (I don't understand), ゆっくり おねがいします (slowly, please). New Year bonus: あけまして おめでとうございます (Happy New Year)." },
              hi: { title: "मदद माँगने वाले वाक्य", detail: "たすけてください (मदद कीजिए!), わかりません (समझ नहीं आया), ゆっくり おねがいします (धीरे बोलिए)। नए साल का बोनस: あけまして おめでとうございます (नव वर्ष की शुभकामनाएँ)।" } },
            { n: 27, dateEn: "Sat 2 Jan", dateHi: "शनि 2 जन",
              en: { title: "Basic kanji 1 - people & Japan", detail: "人 (person), 日 (day / sun), 本 (book / origin) - now read 日本 (Japan) and 日本人 (Japanese person)." },
              hi: { title: "बेसिक Kanji 1 - इंसान और जापान", detail: "人 (इंसान), 日 (दिन / सूरज), 本 (किताब / मूल) - अब 日本 (जापान) और 日本人 (जापानी व्यक्ति) पढ़कर देखें।" } },
            { n: 28, dateEn: "Sun 3 Jan", dateHi: "रवि 3 जन",
              en: { title: "Basic kanji 2 - nature & size", detail: "山 (mountain), 川 (river), 田 (rice field), 大 (big), 小 (small), 中 (middle)." },
              hi: { title: "बेसिक Kanji 2 - प्रकृति और आकार", detail: "山 (पहाड़), 川 (नदी), 田 (धान का खेत), 大 (बड़ा), 小 (छोटा), 中 (बीच)।" } },
            { n: 29, dateEn: "Mon 4 Jan", dateHi: "सोम 4 जन",
              en: { title: "A full conversation", detail: "Role-play: introduce yourself → buy something in a shop → say thank you. All 30 days in one scene." },
              hi: { title: "एक पूरी बातचीत", detail: "रोल-प्ले: अपना परिचय → दुकान पर कुछ खरीदना → धन्यवाद। 30 दिन की पूरी सीख, एक ही सीन में।" } },
            { n: 30, dateEn: "Tue 5 Jan", dateHi: "मंगल 5 जन",
              en: { title: "Final test + your next step", detail: "Post your introduction + 3 sentences in the comments. Completed all 30 days? Your next step is the N5 roadmap." },
              hi: { title: "फ़ाइनल टेस्ट + आपका अगला कदम", detail: "अपना परिचय + 3 वाक्य कमेंट करें। 30/30 दिन पूरे किए? आपका अगला कदम है N5 का रोडमैप।" } }
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
        },
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
        }
      };
