<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { stats } from '/@src/data/blocks/advanced/stats'
import { values } from '/@src/data/blocks/advanced/values'
import { team } from '/@src/data/blocks/advanced/team'
import { boxedGallery } from '/@src/data/blocks/gallery'
import { press } from '/@src/data/blocks/advanced/press'
</script>

<template>
  <div>
    <Section>
      <Container>
        <div class="py-4">
          <div class="-mt-6">
            <PageTitle
              title="ما کار را برای همه، همه جا و در هر زمان معنادار می کنیم"
              subtitle="اطلاعات بیشتر درباره ما"
            >
              <template #content>
                <TextSection
                  first-paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
                  second-paragraph="کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                  support-paragraph="راهنماهای ما را بررسی کنید یا هر روز کاری (۸ صبح تا ۲ بعد از ظهر) از طریق ایمیل با یکی از نمایندگان مراقبت از مشتری ما تماس بگیرید.
                     تیم پشتیبانی ما از طریق تلفن نیز در دسترس است، اما فقط در ساعات کاری (456-785-844+1)."
                  contact-address="contact@vulk.com"
                  support-address="support@vulk.com"
                />
              </template>
            </PageTitle>

            <div class="-mt-6">
              <VidStack
                ratio="16by9"
                source="/assets/video/meeting.mp4"
                poster="/assets/demo/img/posters/poster-2k.jpg"
                title="عنوان ویدیو"
              />
            </div>
          </div>

          <LogoMarquee
            :logos="customerLogos"
            compact
          />
        </div>
      </Container>
    </Section>

    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="با تیم رهبری ما آشنا شوید"
          subtitle="یک تیم با استعداد"
        />

        <div class="mt-6">
          <TeamSection :members="team" />
        </div>
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <div class="pb-6">
          <SideSectionVideo
            subtitle="شرکت ما"
            title="یک شرکت پویا با افراد با استعداد"
            content="اگر به دنبال به حداکثر رساندن دسترسی، افزایش سود افزایشی، یا بهینه سازی نسبت به معیارهای سفارشی باشید، تیم کارشناسان ما اینجا هستند تا اطمینان حاصل کنند که موفقیت برای شاخص کلیدی عملکرد های شما هدف قرار می‌گیرد."
            source="/assets/video/meeting.mp4"
            poster="/assets/demo/img/posters/poster-1c.jpg"
            to="/"
            blob
          />
        </div>

        <NumbersSection
          subtitle="چرا وولک را انتخاب کنید"
          title="مقیاس داده ما به موفقیت شما کمک می‌کند"
          content="مقیاس داده عظیم ما، یادگیری ماشینی و الگوریتم‌های ما را تغذیه می‌کند، بنابراین می‌توانید مطمئن باشید که هر تصمیمی که هوش مصنوعی ما می‌گیرد، هوشمندانه است."
          :numbers="stats"
          animated
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="چه چیزی ما را به آن چیزی که هستیم تبدیل می‌کند"
            subtitle="ارزش هایی که ما را همان چیزی که هستیم می‌سازد"
          />
        </div>

        <ValuesSection
          :values="values"
          image-height="130px"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="ما در مطبوعات هستیم"
            subtitle="آنها در مورد ما صحبت می‌کنند"
          />
        </div>

        <PressSection :releases="press" />
      </Container>
    </Section>

    <Section>
      <Container>
        <LogoSection
          title="ما نتیجه را برای کارآفرینان به دارایی ۵۰۰ سوق می‌دهیم"
          :logos="customerLogos"
        />
        <GalleryBlockC :items="boxedGallery" />
        <div class="mb-12" />
      </Container>
    </Section>
  </div>
</template>
