import React from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpLeft,
  Clock3,
  Compass,
  Droplets,
  MapPin,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { brandData } from '../data/brand';
import './BrandExperiencePage.css';

export type ExperiencePageId = 'about' | 'philosophy' | 'v60' | 'visit';

interface BrandExperiencePageProps {
  page: ExperiencePageId;
  onNavigate: (destination: string) => void;
}

const AboutPage: React.FC = () => (
  <>
    <section className="about-editorial-hero relative flex min-h-[760px] items-end overflow-hidden">
      <img
        className="about-editorial-hero-image"
        src="/images/story-majlis.png"
        alt="مجلس هاجس يجمع بين القهوة والضيافة"
      />
      <div className="about-editorial-hero-shade" />
      <div className="about-editorial-stamp" aria-hidden="true">
        <span>حائل</span>
        <span className="about-editorial-stamp-line" />
        <span>منذ 2020</span>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <motion.div
          className="max-w-3xl text-right"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <p className="about-kicker">حكاية بدأت من هنا</p>
          <h1 className="mt-6 font-kufi text-5xl font-bold leading-[1.4] sm:text-7xl">
            للقهوة مكانٌ،
            <span className="block text-[#E3C994]">وللناس حكاية.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-9 text-[#EEE5D8] sm:text-lg">
            في حائل، بدأت هاجس بفكرة بسيطة: أن نصنع مكاناً تشعر فيه أن القهوة والضيافة تنتميان إلى الحكاية نفسها.
          </p>
          <a className="about-hero-link mt-9" href="#about-story">
            <span>اقرأ حكايتنا</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
      <span className="about-editorial-index" aria-hidden="true">01 / 04</span>
    </section>

    <section id="about-story" className="about-story-layout px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="about-story-photo">
          <img src="/images/about_cafe_pourover.jpeg" alt="قهوة تُحضّر في هاجس" />
          <span>من حائل، بكل محبة</span>
        </div>
        <div className="about-story-copy">
          <p className="about-kicker">الفكرة التي صارت مكاناً</p>
          <h2 className="mt-5 font-kufi text-3xl font-bold leading-relaxed sm:text-4xl">
            مو بس فنجال قهوة،
            <span className="block text-[#B6945F]">هي لحظة تحسّها.</span>
          </h2>
          <p className="mt-6 text-base leading-9 text-[#665A4E]">
            انطلقت هاجس من شغفٍ بالقهوة المختصة، ومن إيمانٍ بأن أجمل التجارب تبدأ بالاهتمام. اخترنا أن يكون لنا مكان في حائل؛ مكان يجمع محبي القهوة على مذاقٍ جديد، وجلسةٍ تستاهل إنك تطوّل فيها.
          </p>
          <p className="mt-4 text-base leading-9 text-[#665A4E]">
            ومع كل كوب، نتمسك بالأصل: ضيافة حقيقية، تفاصيل محسوبة، ومساحة ترحّب بكل من يشاركنا هوس التذوّق.
          </p>
          <div className="about-timeline mt-12">
            <div className="about-timeline-point">
              <span>البداية</span>
              <p>شغفٌ بالقهوة، وفكرة لمكان مختلف.</p>
            </div>
            <div className="about-timeline-point">
              <span>حائل</span>
              <p>هنا صار للشغف عنوان، وصارت للضيافة حكاية.</p>
            </div>
            <div className="about-timeline-point">
              <span>اليوم</span>
              <p>تجربة تتجدد مع كل ضيف وكل زيارة.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-manifesto relative overflow-hidden px-6 py-24 text-center sm:py-32">
      <span className="about-manifesto-mark" aria-hidden="true">“</span>
      <p className="about-kicker">روح هاجس</p>
      <h2 className="relative z-10 mx-auto mt-5 max-w-4xl font-kufi text-3xl font-bold leading-[1.8] sm:text-5xl">
        القهوة تجمعنا،
        <span className="text-[#D2B47A]"> واللحظات الجميلة تبقى.</span>
      </h2>
      <p className="mt-6 text-sm tracking-wide text-[#B9AA95]">هاجس • هوس التذوّق</p>
    </section>
  </>
);

const PhilosophyPage: React.FC = () => (
  <>
    <section className="philosophy-hero relative overflow-hidden px-6 pb-20 pt-40 sm:pb-28">
      <div className="philosophy-hero-sun" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <motion.div
          className="relative z-10 text-right"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="philosophy-kicker">فلسفة هاجس</p>
          <h1 className="mt-6 font-kufi text-5xl font-bold leading-[1.5] text-[#241A12] sm:text-7xl">
            سوّها صح.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-9 text-[#594838] sm:text-lg">
            ليست وصفةً محفوظة، بل طريقة تفكير تبدأ بالسؤال: كيف نجعل التجربة أصدق، وألذّ، وأقرب إلى هاجس؟
          </p>
        </motion.div>
        <div className="philosophy-hero-aside text-right">
          <span className="font-brand text-[11px] tracking-[0.35em] text-[#755B3C]">THE HAJISS WAY</span>
          <p className="mt-4 font-kufi text-xl font-semibold leading-9 text-[#3F3022]">
            الجودة ليست تفصيلاً واحداً؛
            <span className="block">إنها مجموع اختيارات صغيرة.</span>
          </p>
          <span className="mt-6 block text-xs tracking-[0.12em] text-[#8A755C]">01 — 03 / معاييرنا</span>
        </div>
      </div>
      <div className="philosophy-orbit philosophy-orbit-one" aria-hidden="true" />
      <div className="philosophy-orbit philosophy-orbit-two" aria-hidden="true" />
    </section>

    <section className="philosophy-board px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="philosophy-board-heading">
          <span>ما وراء كل رشفة</span>
          <h2 className="font-kufi text-2xl font-bold text-[#241A12] sm:text-3xl">ثلاثة أشياء نؤمن بها.</h2>
        </div>
        <div className="philosophy-bento mt-10">
          <article className="philosophy-bento-origin">
            <img src="/images/roaster_beans.jpg" alt="حبوب القهوة المختارة" />
            <div className="philosophy-bento-origin-shade" />
            <div className="relative z-10">
              <span className="philosophy-number">01 / المصدر</span>
              <h3>اختيار يفتح باب الاكتشاف</h3>
              <p>نحتفي بتنوّع المحاصيل والنكهات؛ فلكل منشأ شخصية، ولكل كوب بداية مختلفة.</p>
            </div>
          </article>
          <article className="philosophy-bento-craft">
            <span className="philosophy-number">02 / الحرفة</span>
            <div className="philosophy-craft-symbol"><Sparkles size={25} strokeWidth={1.3} /></div>
            <h3>عناية لا تختصر الطريق</h3>
            <p>التحضير المتقن احترامٌ للمحصول، وللوقت الذي يخصصه ضيفنا لكوبه.</p>
            <span className="philosophy-craft-caption">CARE IN EVERY CUP</span>
          </article>
          <article className="philosophy-bento-hospitality">
            <div className="philosophy-hospitality-mark">هـ</div>
            <div>
              <span className="philosophy-number">03 / الضيافة</span>
              <h3>أهلاً بك، على طريقتنا.</h3>
              <p>أجمل ما نقدمه هو شعورٌ بالترحيب، يجعل أول زيارة بدايةً لزيارات أخرى.</p>
            </div>
          </article>
          <div className="philosophy-bento-note">
            <span className="font-brand text-[10px] tracking-[0.32em]">HAJISS, BY NATURE</span>
            <p>لا شيء عندنا صدفة؛ لكل تفصيلة قصد.</p>
            <span className="philosophy-note-rule" />
          </div>
        </div>
      </div>
    </section>

    <section className="philosophy-sensory px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          className="philosophy-sensory-photo"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <img src="/images/about_coffee.jpeg" alt="قهوة مقطرة تُحضّر وتُقدّم في هاجس" />
          <div className="philosophy-sensory-photo-label">
            <span>HAJISS</span>
            <span>فنّ التذوّق</span>
          </div>
        </motion.div>

        <div className="philosophy-sensory-copy">
          <span className="philosophy-sensory-kicker">لحظتك مع القهوة</span>
          <h2 className="mt-5 font-kufi text-3xl font-bold leading-relaxed sm:text-4xl">
            جرّب أن تلاحظ
            <span className="block text-[#D6B878]">ما وراء أول رشفة.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-8 text-[#C2B6A5]">
            لا تحتاج أن تكون خبيراً لتستمتع بالقهوة. خذ لحظة، اتبع حواسك، واكتشف التفاصيل التي تجعل كل كوب تجربةً خاصة.
          </p>

          <div className="philosophy-tasting-list mt-10">
            <article className="philosophy-tasting-row">
              <span>١</span>
              <div>
                <h3>ابدأ بالرائحة</h3>
                <p>قرّب الكوب، ودع العطر يعطيك أول انطباع عن النكهة.</p>
              </div>
              <Sparkles size={17} strokeWidth={1.4} aria-hidden="true" />
            </article>
            <article className="philosophy-tasting-row">
              <span>٢</span>
              <div>
                <h3>اكتشف التوازن</h3>
                <p>لاحظ كيف تلتقي الحلاوة والحموضة وقوام القهوة في رشفتك.</p>
              </div>
              <Droplets size={17} strokeWidth={1.4} aria-hidden="true" />
            </article>
            <article className="philosophy-tasting-row">
              <span>٣</span>
              <div>
                <h3>استمتع بما يبقى</h3>
                <p>بعد الرشفة، انتبه للنكهة التي تظل معك للحظات.</p>
              </div>
              <Clock3 size={17} strokeWidth={1.4} aria-hidden="true" />
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="philosophy-hospitality-story">
      <div className="philosophy-hospitality-image">
        <img src="/images/main_cafe.jpg" alt="أجواء هاجس التي تجمع الضيوف حول القهوة" />
      </div>
      <div className="philosophy-hospitality-copy">
        <span className="philosophy-sensory-kicker">والأجمل؟ إنك مو لحالك</span>
        <h2 className="mt-5 font-kufi text-3xl font-bold leading-relaxed sm:text-4xl">
          القهوة بداية،
          <span className="block text-[#E0C58E]">والضيافة تكمل الحكاية.</span>
        </h2>
        <p className="mt-5 text-sm leading-8 text-[#C5B7A4]">
          نحب القهوة التي تفتح مجالاً لحديثٍ جميل، ووقتٍ يمرّ من غير استعجال. عشان كذا، نؤمن أن التجربة المميّزة مو بس في اللي نقدّمه؛ بل في شعورك وأنت بيننا.
        </p>
        <div className="philosophy-hospitality-signoff mt-9">
          <span className="font-brand text-[10px] tracking-[0.3em]">THE HAJISS EXPERIENCE</span>
          <span className="philosophy-hospitality-rule" />
          <span className="font-kufi text-sm text-[#F2E7D5]">حياك في هاجس</span>
        </div>
      </div>
    </section>

    <section className="philosophy-last-word px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <p className="font-kufi text-xl font-bold text-[#F2E7D5] sm:text-2xl">الجودة تُذاق. والضيافة تُحَسّ.</p>
        <span className="text-xs tracking-[0.22em] text-[#C8A46A]">هذي هي هاجس</span>
      </div>
    </section>
  </>
);

const V60Page: React.FC = () => (
  <>
    <section className="v60-hero relative flex min-h-[740px] items-center overflow-hidden">
      <img className="v60-hero-image" src="/images/v60_hero.jpg" alt="طقس إعداد القهوة المقطرة" />
      <div className="v60-hero-overlay" />
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 text-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="v60-eyebrow">THE POUR-OVER RITUAL • هاجس</span>
        <h1 className="mx-auto mt-8 max-w-4xl font-kufi text-5xl font-bold leading-[1.55] sm:text-7xl">
          لكل قطرةٍ
          <span className="block text-[#E3C994]">حكاية.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-9 text-[#E5D9C9] sm:text-lg">
          خذ وقتك. هذا الكوب يُحضّر على مهل، ويكشف نكهته قطرةً بعد قطرة.
        </p>
        <a className="v60-scroll-cue mt-12" href="#v60-ritual" aria-label="انتقل إلى خطوات طقس التقطير">
          <ArrowDown size={17} />
        </a>
        <span className="v60-side-caption">POUR SLOWLY · TASTE DEEPLY</span>
      </motion.div>
    </section>

    <section id="v60-ritual" className="v60-ritual px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="v60-intro">
          <span className="v60-small-label">التقطير، كما نحبّه</span>
          <h2 className="mt-5 font-kufi text-3xl font-bold leading-relaxed sm:text-4xl">
            ما بين أول قطرة
            <span className="text-[#C8A46A]"> وآخر رشفة، طقسٌ كامل.</span>
          </h2>
        </div>
        <div className="v60-steps mt-16">
          <article className="v60-step">
            <span className="v60-step-no">01</span>
            <div className="v60-step-icon"><Compass size={22} strokeWidth={1.3} /></div>
            <div>
              <h3>اختر نكهتك</h3>
              <p>اسأل باريستا هاجس عن المحاصيل المتوفرة، وابحث عن النكهة التي تناسب ذوقك.</p>
            </div>
            <span className="v60-step-aside">THE BEAN</span>
          </article>
          <article className="v60-step">
            <span className="v60-step-no">02</span>
            <div className="v60-step-icon"><Droplets size={22} strokeWidth={1.3} /></div>
            <div>
              <h3>راقب الاستخلاص</h3>
              <p>ماءٌ يتدفق بهدوء، ورائحة تبدأ بالانتشار. لكل حركة وقتها وإيقاعها.</p>
            </div>
            <span className="v60-step-aside">THE POUR</span>
          </article>
          <article className="v60-step">
            <span className="v60-step-no">03</span>
            <div className="v60-step-icon"><Clock3 size={22} strokeWidth={1.3} /></div>
            <div>
              <h3>تذوّق على مهل</h3>
              <p>امنح كوبك لحظةً ليبرد قليلاً؛ هكذا تتكشف تفاصيله رشفةً بعد رشفة.</p>
            </div>
            <span className="v60-step-aside">THE TASTE</span>
          </article>
        </div>
      </div>
    </section>

    <section className="v60-aftertaste">
      <div className="v60-aftertaste-image">
        <img src="/images/espresso_pour.jpg" alt="انسياب القهوة أثناء التحضير" />
      </div>
      <div className="v60-aftertaste-copy">
        <span className="v60-small-label">دع النكهة تقودك</span>
        <h2 className="mt-5 font-kufi text-3xl font-bold leading-relaxed sm:text-4xl">
          زهريّة؟ فاكهية؟ أو مفاجأة ما توقعتها.
        </h2>
        <p className="mt-5 text-sm leading-8 text-[#BCAF9C]">
          تجارب التقطير تتغير مع اختلاف المحصول والتحضير. مرّ علينا واكتشف المحاصيل المتاحة اليوم.
        </p>
        <a
          href={brandData.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="v60-location-link mt-8"
        >
          <span>جرّبها في هاجس</span>
          <ArrowLeft size={16} />
        </a>
      </div>
    </section>
  </>
);

const VisitPage: React.FC = () => (
  <>
    <section className="visit-welcome relative flex min-h-[690px] items-end overflow-hidden">
      <img className="visit-welcome-image" src="/images/lounge_terrace.jpg" alt="جلسات هاجس في حائل" />
      <div className="visit-welcome-shade" />
      <div className="visit-welcome-coordinate" aria-hidden="true">27°30'18.1"N<br />41°41'56.8"E</div>
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-24"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="visit-kicker"><MapPin size={15} /> حائل • المملكة العربية السعودية</p>
        <h1 className="mt-6 font-kufi text-5xl font-bold leading-[1.45] sm:text-7xl">
          ننتظرك.
          <span className="block text-[#E3C994]">والقهوة علينا.</span>
        </h1>
        <p className="mt-5 max-w-lg text-base leading-9 text-[#EAE0D2]">
          خذ لك مكان، اطلب قهوتك المفضلة، وخلي الوقت يمشي على كيفك.
        </p>
        <a href="#visit-details" className="visit-down-link mt-9">
          <span>خطّط زيارتك</span>
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>

    <section id="visit-details" className="visit-details px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="visit-info-panel">
          <span className="visit-overline">YOUR TABLE IS WAITING</span>
          <h2 className="mt-5 font-kufi text-3xl font-bold leading-relaxed">موعدنا في هاجس.</h2>
          <p className="mt-4 text-sm leading-8 text-[#BBAE9C]">
            تعال لقهوة الصباح، أو جلسة العصر، أو أي وقت ودك تغيّر فيه جوّك. حياك الله في هاجس.
          </p>
          <div className="visit-address mt-9">
            <MapPin size={19} />
            <div>
              <span>زورنا في</span>
              <p>{brandData.location.placeAr}، {brandData.location.cityAr}</p>
            </div>
          </div>
          <a
            className="visit-directions mt-8"
            href={brandData.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Navigation size={16} />
            <span>افتح الاتجاهات على الخريطة</span>
            <ArrowUpLeft className="mr-auto" size={15} />
          </a>
          <div className="visit-hours-note mt-10">
            <span className="visit-open-dot" />
            <p>نستقبلك بكل حب — تحقّق من ساعات العمل قبل زيارتك.</p>
          </div>
        </div>

        <div className="visit-map-frame">
          <iframe
            title="موقع مقهى هاجس على الخريطة"
            src={`https://www.google.com/maps?q=${encodeURIComponent(brandData.location.mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="visit-map-label"
            href={brandData.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={15} />
            <span>هاجس كافيه · حائل</span>
          </a>
        </div>
      </div>
    </section>

    <section className="visit-gallery-section px-6 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="visit-gallery-heading">
          <div>
            <span className="visit-overline">A LITTLE LOOK AROUND</span>
            <h2 className="mt-4 font-kufi text-2xl font-bold">لكل جلسة مزاج.</h2>
          </div>
          <p>مساحة تجمع هدوء المكان ودفء الوجار.</p>
        </div>
        <div className="visit-gallery">
          <figure className="visit-gallery-large">
            <img src="/images/main_cafe.jpg" alt="أجواء مقهى هاجس" />
            <figcaption>مكانك للقهوة والسوالف</figcaption>
          </figure>
          <figure className="visit-gallery-small">
            <img src="/images/visit_v60.jpeg" alt="قهوة هاجس تُقدّم للضيوف" />
            <figcaption>قهوة تُحضّر بمحبة</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </>
);

export const BrandExperiencePage: React.FC<BrandExperiencePageProps> = ({
  page,
  onNavigate,
}) => {
  const pageViews: Record<ExperiencePageId, React.ReactNode> = {
    about: <AboutPage />,
    philosophy: <PhilosophyPage />,
    v60: <V60Page />,
    visit: <VisitPage />,
  };

  return (
    <div className={`brand-page brand-page-${page} min-h-screen bg-[#100B08] text-[#F8F4EC]`}>
      <Navbar onNavigate={onNavigate} activeSection={page} forceSolid />
      <main>{pageViews[page]}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
