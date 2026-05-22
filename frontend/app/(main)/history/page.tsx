"use client"

import { BookOpen, Landmark, Users, ScrollText, ArrowRight } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col gap-3 text-center mb-10 pt-4">
        <div className="mx-auto p-4 bg-primary/10 text-primary rounded-full w-fit">
          <Landmark size={36} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          History & Culture
        </h1>
        <p className="text-muted-foreground">
          Discover the rich heritage and cultural roots of the Jhariya Samaj.
        </p>
      </div>

      {/* Part 1: Cultural History */}
      <section className="bg-card rounded-[2rem] p-6 md:p-10 shadow-sm border border-border/50 space-y-6">
        <div className="flex items-center gap-3 border-b border-border/50 pb-4 mb-6">
          <BookOpen className="text-primary w-6 h-6" />
          <h2 className="text-2xl font-bold text-foreground">1. Cultural History (सांस्कृतिक इतिहास)</h2>
        </div>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
          
          <p>
            झारिया समाज भारत के मूल निवासी समाजो में से एक है। भारत मे स्थाई निवासी यहाँ का आदिवासी समुदाय है उसी के साथ साथ हम ओर हमारा समाज भी संमिलित है। हमारे पूर्वज पहले जंगलों में निवास करते थे, भारत के सभी समुदायों के लोगों के साथ बहुत अच्छे थे। झारिया समाज के लोगों पर सभी समाज के लोग बहुत ही विश्वास करते थे। झारिया समाज का हर व्यक्ति बहुत ही सभ्य और मिलनसार होने के लिए जाने जाना लगा था।
          </p>

          <p>
            उस समय जीवन के लिए अत्यावश्यक वस्तुओं में भोजन, पानी, आवास के अतिरिक्त कपड़ा का स्थान शीर्ष पर था। यही कारन था की इससे जुड़े कार्यों को काफी महत्त्व दिया जाता था जैसे कपास की पैदावार व व्यवसाय, लेकिन इस परिप्रेक्ष्य में "कपड़ा निर्माण" सबसे प्रतिष्ठित कार्य हुआ करता था। झारिया समाज के लोग मध्यम स्तर के कई कामों के अतिरिक्त कपड़ा निर्माण यानि जुलाहे का व्यवसाय भारी मात्रा में अपनाया।
          </p>

          {/* Image Placeholder 1 */}
          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden my-6 shadow-sm border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1605814578508-4d56417fae7b?auto=format&fit=crop&w=800&q=80" 
              alt="Ancient weaving and cloth making" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <p>
            समाज, झारिया समाज की कर्तव्य निष्ठा से प्रभावित होकर झारिया समाज के लोगो को देखरेख का कार्य सोंपने लगे और इनके कार्यों से बहुत ही प्रभावित हुआ करते थे क्योंकि यह बहुत ही निष्ठा और सहजता के साथ अपने कार्यों का निर्वहन करते थे। शिक्षा और व्यवस्थाओं के अभाव में धीरे धीरे झारिया समाज के लोग चौकीदारी (कोटवारी) का कार्य करने लगे। अन्य समाज के लोगों से अच्छे संबंध होने के कारण हम जिस समाज के साथ रहते उसी के कुछ गुण (काम) सीख लेते, इस प्रकार हम किसी भी एक कार्य पर आश्रित नहीं रहे।
          </p>

          <p>
            झारिया समाज ने हमेशा देश भक्ति का परिचय दिया एवं देश हित मे अव्वल रहा। जब भारत में मुगलों का काल चल रहा था, और जबरन धर्म परिवर्तन का दौर चल रहा था तब भी झारिया समाज के पूर्वजों ने छोटे से छोटा कार्य करने को तैयार थे परंतु उन्होंने कभी भी अपने धर्म कार्य और नीति से समझौता नहीं किया।
          </p>

          <p>
            <strong>‘झारिया’ की उत्पत्ति:</strong> आम राय नहीं है लेकिन उड़ीसा (उत्कल) से सम्बद्धता अधिक तथ्यात्मक है, जिसके अनुसार उत्कल के जंगलों के निवासी जो की कपड़ा बनाने, भोज बनाने, एवं शुक्ल यजुर्वेद संहिता के पाठ में दक्ष होते थे। पुरी सहित तबके लगभग सभी मंदिरों में "प्रसाद" बनाने का काम झाड़िया (झारिया) लोग ही किया करते थे। यह कार्य उनके भोज्य-पाक में शुद्धता बरतने के कारण सोंपा गया था। ये नगरों से पृथक झाड़ी प्रदेश यानि जंगलों में रहते थे, झाड़ियों के बीच रहने के कारण सम्पूर्ण उड़ीसा के लोग उन्हें "झाड़िया" कहने लगे जो उत्तरोत्तर "झारिया" शब्द में परिणत हो गया।
          </p>

          <p>
            आम तौर पर हम झारिया समाज के लोग ‘झारिया’ (शब्द) को एक सरनेम या उपनाम की तरह इस्तेमाल करते रहे हैं। हम में से विरले ही इसे अपनी जाति के बतौर प्रयोग में लाते होंगे। हम में से लगभग सभी अपनी जाति ‘मेहरा’ लिखते रहे हैं क्यों कि झारिया एक जाति के बतौर अभी तक सरकारी दस्तावेज़ों में दर्ज़ नहीं हुई थी।
          </p>

          {/* Image Placeholder 2 */}
          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden my-6 shadow-sm border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80" 
              alt="Historical Indian Architecture" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">गौंड, मुगल और मराठा काल में झारिया समाज की स्थिति</h3>
          
          <p>
            16वीं – 17वीं सदी के आस-पास गौंड़ो, मुगलों और मराठाओं के बीच अनवरत युद्धों के कारण आम प्रजा के पलायनों के साथ प्रवासित होने पर जातियों को किस प्रकार राजाओं, जागीरदारों, मालगुज़ारों और अन्य ग्राम-प्रधानों द्वारा बदल दिया जाता था इसका उदाहरण भिन्न स्थानों में झारिया समाज के भिन्न स्वरूपों को जानकर मिलता है।
          </p>

          <p>
            अध्ययनों से पता चलता है कि मुगलों और मराठा हुकूमतों के दौरान झारिया समाज के युद्धबंदियों और विस्थापितों को राजाओं और ग्रामप्रधानों ने अपने-अपने राज्यों और गाँवों में निचले दर्ज़े के काम करवाने के लिए अपनी मन-मर्ज़ी से जिस जाति में चाहा उस जाति में मिला कर बँधुआ मज़दूर बना दिया था। यही कारण है कि झरिया (जाति) अलग-अलग क्षेत्रों में अलग-अलग जातियों की उपजाति के रूप में पाई जाती है।
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">भिन्न क्षेत्रों में भिन्न जातियों से जुड़ा झारिया समाज</h3>
          
          <p>
            गौंड़, मुगल और मराठा राजाओं के बीच सदियों तक चले अनवरत युद्धों के दौरान श्रमिक श्रेणी की प्रजा झुंडों में हारने वाले राज्यों से पलायन करके दूर-दराज़ के राज्यों में शांतिपूर्ण जीवन की तलाश में भटकती रहती थी। झारिया समाज के लोगों को भी इन्हीं समाजिक परिवर्तनों से गुज़रना पड़ा था।
          </p>

          {/* Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { title: "अरण्यक ब्राह्मण और झारिया", desc: "पष्चिमी उड़ीसा के पहाड़ी और वन्यक्षेत्र में सर्वप्रथम बसी अरण्यक ब्राह्मणों की एक उपजाति। इन्हें स्थानीय भाषा में पंचदेसी, झाड़ुआ और झारिया ब्राह्मण कहा जाता है।" },
              { title: "कुनबी जाति और झारिया", desc: "महाराष्ट्र में झारिया जाति का उल्लेख वहाँ की काश्तकार जाति ‘कुनबी’ की उपजाति के रूप में भी मिलता है।" },
              { title: "यादव जाति और झारिया", desc: "महाराष्ट्र में झारिया जाति का उल्लेख रावत जाति की उपजातियों के बतौर होता है। रावत यादवों और अहीरों से संबंधित है।" },
              { title: "जाट, कुर्मी जाति और झारिया", desc: "17वीं शताब्दी के आसपास, हज़ारों की संख्या में झारिया, जाट और कुर्मियों ने एक साथ बड़े-बड़े झुंडों में झारखण्ड से मध्यभारत पलायन किया।" },
              { title: "चौरसिया जाति और झारिया", desc: "मध्यभारत में झारिया जाति को ‘बराई’ (पान के बरेजे लगाने वाले) जाति की उपजाति माना जाता है।" },
              { title: "राठौर राजपूत, तेली और झारिया", desc: "छत्तीसगढ़ में झारिया जाति तेलियों की उपजाति मानी जाती है जो कि मण्डला क्षेत्र से विस्थापित होकर आए थे।" },
              { title: "लोधी जाति और झारिया", desc: "ऐतिहासिक दस्तावेज़ों के अनुसार लोधियों की उपजातियों में झारिया भी शामिल है जो मण्डला क्षेत्र से विस्थापित होकर विदर्भ में आए थे।" },
              { title: "मेहरा जाति – मेहरगढ़", desc: "नवपाषाण युग (7000 ईसा-पूर्व से 3300 ईसा-पूर्व) के बहुत से अवशेष मिले हैं। यह स्थल सिंधु सभ्यता के विकास और उत्पत्ति पर प्रकाश पड़ता है।" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-background border border-border/50 rounded-2xl shadow-sm">
                <h4 className="font-bold text-foreground text-base mb-1 flex items-center gap-2">
                  <ArrowRight size={16} className="text-primary" /> {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer Note */}
          <div className="mt-8 p-4 bg-primary/5 text-primary-foreground border border-primary/20 rounded-xl text-xs md:text-sm">
            <span className="text-primary font-bold">नोट:-</span> यह जानकारी इंटरनेट के माध्यम से संकलित की गई है संघ संगठन या संकलितकर्ता किसी भी प्रकार की पुष्टि नहीं करते हैं एवं किसी भी न्यायिक कार्य हेतु जिम्मेदार नही है।
          </div>

          {/* References Toggle (Accordion Style) */}
          <details className="group mt-6 p-4 bg-secondary rounded-xl cursor-pointer">
            <summary className="font-bold text-foreground outline-none">
              संदर्भ (References) देखें
            </summary>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-muted-foreground list-disc pl-5">
              <li>CHAPTER II: Administrative and Social Regions of Middle India, 1500-1920</li>
              <li>The Project Gutenberg EBook of the Tribes and Castes of the Central Provinces of India--Volume I (of IV), by R.V. Russell</li>
              <li>Kotwar: The sections of the tribes who held this office have developed into special castes...</li>
              <li>Government of India, Ministry of social justice and empowerment: Scheduled Casts: SSr No: 36. Mahar, Mehra, Mehar, Mahara</li>
              <li>मध्यप्रदेश राजपत्र (असाधारण) क्रमांक: 205, भोपल, शनीवार, 5 अप्रेल 1997</li>
              <li>Maharashtra, Gazetteers Department: Kunbis, Khaire, Dhanoje, Khedula, Jharia</li>
              <li>People of India: Maharashtra, Volume 3: By Kumar Suresh Singh, B. V. Bhanu, Anthropological Survey of India</li>
              <li>Utkala Brahmin: Wikipedia (Aranyaka / Jhadua Brahmins)</li>
              <li>JatLand Site: Jhad, Jhar, Jhadia, Jhadiya, Jhariya gotra Jats live in Nimach, Ratlam districts.</li>
            </ul>
          </details>

        </div>
      </section>

      {/* Part 2: Social History */}
      <section className="bg-card rounded-[2rem] p-6 md:p-10 shadow-sm border border-border/50">
        <div className="flex items-center gap-3 border-b border-border/50 pb-4 mb-6">
          <Users className="text-primary w-6 h-6" />
          <h2 className="text-2xl font-bold text-foreground">2. Social History (सामाजिक इतिहास)</h2>
        </div>

        {/* Placeholder for future content */}
        <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
          <ScrollText size={48} className="opacity-20 mb-4" />
          <p className="text-center font-medium">
            समाज का सामाजिक इतिहास (Social History) का विस्तृत वर्णन यहाँ जोड़ा जाएगा।
          </p>
          <p className="text-sm mt-2 text-center max-w-md">
            This section is reserved for the social development, community milestones, and future records.
          </p>
        </div>
      </section>

    </div>
  )
}