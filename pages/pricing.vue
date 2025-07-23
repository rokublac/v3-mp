<template>

  <form class="group/tiers relative py-24 sm:py-32 overflow-hidden">
    <!-- Background image with gradient overlay -->
    <div class="absolute inset-0 -z-10 bg-black-950">
      <div class="absolute inset-0 bg-[url('~/public/images/home/skyscraper.jpeg')] bg-cover bg-center opacity-50"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black-950"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <p class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Flexible
          plans for limitless creations
        </p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-regular text-gray-200 sm:text-xl/8">
        Designed for artists and studios—giving you access to premium assets, simple licensing, and more
        time to create.
      </p>
      <div class="mt-16 flex justify-center">
        <fieldset aria-label="Payment frequency">
          <div
            class="grid grid-cols-2 gap-x-1 rounded-full bg-black-950 p-1 text-center text-xs/5 font-semibold text-gray-100">
            <label class="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-gray-800">
              <input type="radio" name="frequency" value="monthly" checked
                class="absolute inset-0 appearance-none rounded-full" />
              <span class="text-white">Monthly</span>
            </label>
            <label class="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-gray-800">
              <input type="radio" name="frequency" value="annually"
                class="absolute inset-0 appearance-none rounded-full" />
              <span class="text-white">Annually</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div
          class="group/tier bg-black-950/90 rounded-3xl p-8 ring-1 ring-gray-200/10 data-[featured]:bg-white/5 data-[featured]:ring-2 data-[featured]:ring-orange-400 xl:p-10">
          <div class="flex flex-col gap-4">
            <div class="mb-4">
              <img src="~public/images/personal-icon-pricing.svg" alt="Commercial plan icon" class="w-12 h-12" />
            </div>
            <h3 id="tier-freelancer" class="text-3xl/8 font-semibold text-white">Personal</h3>
          </div>
          <p class="mt-4 mb-8 text-sm/6 text-gray-300">Designed for solo artists or small studios
            earning under
            $100K USD annually. Includes a single-seat personal license with access to high-resolution
            assets,
            flexible credit usage, and support for JPG and RAW formats.
          </p>
          <p class="mt-4 text-sm/6 text-gray-300">From
          </p>
          <p
            class="mt-1 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=monthly]:checked))]/tiers:hidden">
            <span class="text-4xl font-semibold tracking-tight text-white">$19</span>
            <span class="text-sm/6 font-semibold text-gray-300">/month</span>
          </p>
          <p
            class="mt-1 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
            <span class="text-4xl font-semibold tracking-tight text-white">$199</span>
            <span class="text-sm/6 font-semibold text-gray-300">/year</span>
          </p>
          <button type="submit" name="tier" value="freelancer" aria-describedby="tier-freelancer"
            class="mt-8 block w-full rounded-md bg-primary-200 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-[featured]/tier:bg-blue-500 group-data-[featured]/tier:text-white group-data-[featured]/tier:shadow-sm group-data-[featured]/tier:hover:bg-blue-600 group-data-[featured]/tier:focus-visible:outline-blue-500">View
            plans</button>
        </div>
        <div
          class="group/tier bg-black-950/90 rounded-3xl p-8 ring-1 ring-gray-200/10 data-[featured]:bg-white/5 data-[featured]:ring-2 data-[featured]:ring-orange-400 xl:p-10">
          <div class="flex flex-col gap-4">
            <div class="mb-4">
              <img src="~public/images/commercial-icon-pricing.svg" alt="Commercial plan icon" class="w-12 h-12" />
            </div>
            <h3 id="tier-startup" class="text-3xl/8 font-semibold text-white">Commercial</h3>
          </div>
          <p class="mt-4 mb-8 text-sm/6 text-gray-300">Built for companies that need a robust, secure
            solution for
            team-based production. Includes single-site licensing, advanced user management, IP-based
            login
            controls, and access to high-resolution assets in multiple formats.
          </p>
          <p class="mt-4 text-sm/6 text-gray-300">From
          </p>
          <p
            class="mt-1 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=monthly]:checked))]/tiers:hidden">
            <span class="text-4xl font-semibold tracking-tight text-white">$29</span>
            <span class="text-sm/6 font-semibold text-gray-300">/month</span>
          </p>
          <p
            class="mt-1 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
            <span class="text-4xl font-semibold tracking-tight text-white">$299</span>
            <span class="text-sm/6 font-semibold text-gray-300">/year</span>
          </p>
          <button type="submit" name="tier" value="startup" aria-describedby="commercial-tier"
            class="mt-8 block w-full rounded-md bg-primary-200 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-[featured]/tier:bg-indigo-500 group-data-[featured]/tier:text-white group-data-[featured]/tier:shadow-sm group-data-[featured]/tier:hover:bg-indigo-400 group-data-[featured]/tier:focus-visible:outline-indigo-500">View
            plans</button>
        </div>
      </div>
    </div>
  </form>



  <div class="bg-black-950 py-12 sm:py-6">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg/8 font-medium text-gray-400">Fueling the world’s most imaginative films, games, and
        experiences.</h2>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img width="158" height="48"
          src="~/public/images/studio logos/blur.png" alt="Transistor"
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

        <img width="158" height="48" src="public/images/studio logos/dneg.png"
          alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

        <img width="158" height="48" src="public/images/studio logos/framestore.png"
          alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

        <img width="158" height="48" src="public/images/studio logos/goodbyekansas-group-white.png"
          alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />

        <img width="158" height="48" src="public/images/studio logos/scanline.png"
          alt="Statamic"
          class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
      </div>
    </div>
  </div>

  <div class="bg-black-950">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">Frequently asked questions
        </h2>
        <dl class="mt-16 divide-y divide-white/10">
          <div class="py-6 first:pt-0 last:pb-0">
            <dt>
              <!-- Expand/collapse question button -->
              <button type="button" aria-controls="faq-0" aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-white">
                <span class="text-base/7 font-semibold">What license do I need, Artist or Commercial?</span>
                <span class="ml-6 flex h-7 items-center">
                  <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="size-6">
                    <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="hidden size-6">
                    <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd id="faq-0" class="mt-2 pr-12">
              <p class="text-base/7 text-gray-400">Our Artist plans are intended for individuals with less than $100K
                USD in annual revenue or funding. If you’re a business or studio, you’ll need one of our Commercial
                License options.
              </p>
            </dd>
          </div>
          <div class="py-6 first:pt-0 last:pb-0">
            <dt>
              <!-- Expand/collapse question button -->
              <button type="button" aria-controls="faq-1" aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-white">
                <span class="text-base/7 font-semibold">Do you offer educational discounts? </span>
                <span class="ml-6 flex h-7 items-center">
                  <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="size-6">
                    <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="hidden size-6">
                    <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd id="faq-1" class="mt-2 pr-12">
              <p class="text-base/7 text-gray-400">Yes! We partner with schools and educators to provide tailored
                discounts for students and institutions. If you’re a teacher or represent a school, please get in touch.
              </p>
            </dd>
          </div>
          <div class="py-6 first:pt-0 last:pb-0">
            <dt>
              <!-- Expand/collapse question button -->
              <button type="button" aria-controls="faq-2" aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-white">
                <span class="text-base/7 font-semibold">What happens to my credits if I cancel?
                </span>
                <span class="ml-6 flex h-7 items-center">
                  <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="size-6">
                    <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="hidden size-6">
                    <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd id="faq-2" class="mt-2 pr-12">
              <p class="text-base/7 text-gray-400">Your unused credits will remain available for 6 months after
                cancellation on Personal plans. Note that an active subscription is required to use them.
              </p>
            </dd>
          </div>
          <div class="py-6 first:pt-0 last:pb-0">
            <dt>
              <!-- Expand/collapse question button -->
              <button type="button" aria-controls="faq-3" aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-white">
                <span class="text-base/7 font-semibold">How does monthly credit rollover work?
                </span>
                <span class="ml-6 flex h-7 items-center">
                  <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="size-6">
                    <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="hidden size-6">
                    <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd id="faq-3" class="mt-2 pr-12">
              <p class="text-base/7 text-gray-400">All plans include credit rollover, allowing you to carry over unused
                credits each month up to a set limit. Credits will remain in your account until they expire.
              </p>
            </dd>
          </div>

          <div class="py-6 first:pt-0 last:pb-0">
            <dt>
              <!-- Expand/collapse question button -->
              <button type="button" aria-controls="faq-3" aria-expanded="false"
                class="flex w-full items-start justify-between text-left text-white">
                <span class="text-base/7 font-semibold">Can I still use MattePaint assets after my Commercial
                  subscription expires?
                </span>
                <span class="ml-6 flex h-7 items-center">
                  <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="size-6">
                    <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                    aria-hidden="true" class="hidden size-6">
                    <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd id="faq-3" class="mt-2 pr-12">
              <p class="text-base/7 text-gray-400">If you cancel your Commercial License, your rights to use and access
                MattePaint assets will end at the conclusion of your billing period. In accordance with our <a
                  href="https://mattepaint.com/tos" target="_blank" rel="noopener noreferrer"
                  class="text-blue-400 hover:underline">Terms of Service</a>, all assets must be removed from any
                projects that were not completed and publicly released during your active license. You may not use
                MattePaint assets in any future projects after your license has ended, and all stored or backed-up
                assets must be permanently deleted across all studio locations covered by the license.

              </p>
            </dd>
          </div>




        </dl>
      </div>
    </div>
  </div>




</template>