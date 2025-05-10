<script setup lang="ts">
import { table } from '/@src/data/blocks/table'
import { tableProps, tableBordered } from '/@src/data/docs/base/table'
</script>

<template>
  <Section
    id="table-bordered-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-9">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="جدول حاشیه‌دار"
            subtitle="سبک‌های مختلف جدول حاشیه‌دار"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <SimpleTable :bordered="true">
              <SimpleTableRow>
                <SimpleTableHeader>کارمند</SimpleTableHeader>
                <SimpleTableHeader>موقعیت</SimpleTableHeader>
                <SimpleTableHeader>مهارت‌ها</SimpleTableHeader>
                <SimpleTableHeader>وضعیت</SimpleTableHeader>
                <SimpleTableHeader>تجربیات</SimpleTableHeader>
                <SimpleTableHeader>اقدامات</SimpleTableHeader>
              </SimpleTableRow>
              <SimpleTableRow
                v-for="(item, index) in table"
                :key="index"
              >
                <SimpleTableCell>
                  <SimpleTableCellFlex>
                    <template #media>
                      <AvatarSimple :picture="item.employee.picture" />
                    </template>
                    <template #content>
                      <Title
                        tag="h3"
                        :size="7"
                        weight="semi"
                        narrow
                      >
                        {{ item.employee.name }}
                      </Title>
                      <p class="paragraph rem-75">
                        {{ item.employee.position }}
                      </p>
                    </template>
                  </SimpleTableCellFlex>
                </SimpleTableCell>
                <SimpleTableCell>
                  <SimpleTableCellFlex>
                    <template #media>
                      <Icon icon="feather:map-pin" />
                    </template>
                    <template #content>
                      <p class="paragraph rem-85">
                        {{ item.location }}
                      </p>
                    </template>
                  </SimpleTableCellFlex>
                </SimpleTableCell>
                <SimpleTableCell>
                  <AvatarGroup
                    size="small"
                    :avatars="item.skills"
                    :limit="5"
                    compact
                  />
                </SimpleTableCell>
                <SimpleTableCell>
                  <Tag
                    :label="item.status.label"
                    :color="item.status.color"
                    outlined
                  />
                </SimpleTableCell>
                <SimpleTableCell color="default">
                  <p class="paragraph rem-85">
                    {{ item.experience }}
                  </p>
                </SimpleTableCell>
                <SimpleTableCell>
                  <RouterLink
                    :to="{ name: item.url }"
                    class="link has-underline is-reversed rem-90"
                  >
                    مشاهده پروفایل
                  </RouterLink>
                </SimpleTableCell>
              </SimpleTableRow>
            </SimpleTable>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="tableBordered"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="tableProps"
            />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                نمونه داده‌ای برای این مؤلفه موجود نیست
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              جدول Vulk یک کامپوننت بسیار چندمنظوره است که به چندین زیرکامپوننت
              تقسیم شده است تا انعطاف‌پذیری بیشتری فراهم کند. کامپوننت
              <code>&#x3C;SimpleTable /&#x3E;</code>
              به عنوان wrapper اصلی عمل می‌کند. کامپوننت
              <code>&#x3C;SimpleTableRow /&#x3E;</code>
              به عنوان ردیف جدول عمل می‌کند، در حالی که
              <code>&#x3C;SimpleTableHeader /&#x3E;</code>
              و
              <code>&#x3C;SimpleTableCell /&#x3E;</code>
              به عنوان
              <code>th</code>
              و
              <code>td</code>
              عمل می‌کنند. به طور پیش‌فرض، جدول با حاشیه مرزی است، زیرا prop
              <code>bordered</code>
              به طور پیش‌فرض روی
              <code>true</code>
              تنظیم شده است. شما می‌توانید با تنظیم آن به
              <code>false</code>
              مرزها را حذف کنید. همچنین می‌توانید با استفاده از prop
              <code>striped</code>
              یک جدول راه‌راه ایجاد کنید. البته می‌توانید هر یک از این سبک‌ها را
              با هم ترکیب کنید. توجه داشته باشید که می‌توانید با افزودن prop
              <code>scrollable</code>
              یک جدول قابل پیمایش افقی نیز ایجاد کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
