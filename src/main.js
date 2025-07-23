let currentBook = 0; 
const Books = [
  {
    id: 0, pages: 28, price: 20, 
    image: "/src/book1.jpg",
    rating: 4.9, reviews: 248,
    title: 'كيف تصنع دخلًا سلبيًا بـ AI',
    description: "📘 اصنع دخلك السلبي بالذكاء الاصطناعي\n\n💡 طرق حقيقية، بخطوات بسيطة، من غير تعقيد.\n\nلو نفسك تبدأ تكسب من غير ما تشتغل طول اليوم ⏳\n\nوعايز تبني دخل ثابت بذكاء وأقل مجهود 💡\n\nالكتاب ده هيدلّك على الطريق بخطوات واضحة وسهلة ✅\n\n🎧 هتتعلّم مثلًا:\n\nإزاي تحوّل محتوى مكتوب لكتاب صوتي احترافي بدون ما تسجل صوتك.\n\nأو تصمّم منتج رقمي بسيط (زي جدول مذاكرة) وتبيعه أونلاين من غير طباعة ولا شحن.\n\n📌 الشرح عملي، خطوة بخطوة، وبأدوات مجانية.\n\n🚀 ابدأ بخطوة... وخلي الذكاء الاصطناعي يفتحلك باب جديد للربح!\n\nاكتشف أبسط 10 طرق لصناعة دخل سلبي باستخدام أدوات الذكاء الاصطناعي."
 }
];


function $(item) {
  return document.getElementById(item); 
}

function init() {
  lucide.createIcons();
  function tailwindCss() {
    tailwind.config = { theme: { extend: { 
      colors: { primary: '#FF914C' }, 
      fontSize: { xs: ['0.75em'], sm: ['0.875em'], base: ['1em'], lg: ['1.125em'], xl: ['1.25em'], '2xl': ['1.5em'], '3xl': ['1.875em'], '4xl': ['3em'] } } }
    };
    document.body.style.fontSize = (!!window.chrome && (navigator.userAgent.indexOf("Edge") === -1) ? '20px' : (typeof InstallTrigger !== 'undefined' ? '14px' : '16px'));
  } tailwindCss(); 
  // get id book 
  const params = new URLSearchParams(location.search);
  if (!!params.get("id")) currentBook = parseInt(params.get("id")); 
} init()

function bookData(id) {
  const { image, title, price, description, rating, pages } = Books.find(book => book.id === id);
  if (!title) return;
  // Update product info
  $('imageBook').src = image;
  $('titleBook').textContent = title;
  $('Price').textContent = price +' جنية'; 
  $('rating').textContent = rating;
  $('pagesCount').textContent = pages;
  $('vodafoneCode').textContent = `*9*7*01044197802*${price}#`;
  $('description').textContent = description;
  // Scroll To Top
  scrollTo(0,0);
  currentBook = id; 
  setTimeout(()=> similar(), 500); 
} 
bookData(currentBook);


function similar() {
  if (Books.length > 1) { 
    $('SimilarContener').classList.remove('hidden'); 
    $('similarBooks').innerHTML = Books.filter(b => b.id != currentBook).map(book => `
      <div onclick="bookData(${book.id})">
        <img src=${book.image} id="imageBook" class="w-full rounded-2xl hover:scale-[1.03] duration-300">
        <h2 class='text-xs text-center py-3'>${book.title}</h2>
      </div>    
    `).join('\n'); 
  }
} similar()


function shareBookLink() {
  navigator.clipboard.writeText(location.href +'?id='+ currentBook).then(() => {
    $('copyDone').style.width = '60px'; 
    setTimeout(()=> $('copyDone').style.width = '0px', 1500);
  })
}

function paymentAppear() {
  $('paymentMethod').classList.remove('hidden')
}
