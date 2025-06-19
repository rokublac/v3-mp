<template>
  <main>
    <div class="bg-black-950">
      <main>
        <div>
          <!-- Hero card -->
          <div class="bg-black-800">
            <div class="relative isolate overflow-hidden pt-14">
              <img src="~/public/images/home/hero-green-2.jpeg" alt=""
                class="absolute inset-0 -z-10 size-full object-cover mix-blend-multiply" />
              <div class="absolute inset-0 bg-gradient-to-t from-black-950/100 to-transparent -z-10" />
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
                  <div class="text-center">
                    <h1 class="text-balance text-5xl font-bold tracking-tight text-white sm:text-7xl">Production-ready
                      images built for visual storytelling
                    </h1>
                    <p class="mt-8 text-lg font-regular text-white/80 sm:text-lg/8 max-w-3xl mx-auto">Developed for
                      creative professionals, with transparent terms and production-ready quality. Every artist
                      deserves access to world-class image assets to bring their ideas to life.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                      <button type="button"
                        class="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore
                        gallery</button>

                      <button type="button"
                        class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100">View
                        our plans</button>
                    </div>
                    <!-- studio social logos -->
                    <div class="mt-20">
                      <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                          class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
                            alt="Transistor" width="158" height="48" />
                          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
                            alt="Reform" width="158" height="48" />
                          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Tuple"
                            width="158" height="48" />
                          <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
                            alt="SavvyCal" width="158" height="48" />
                          <img
                            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
                            alt="Statamic" width="158" height="48" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--bento grid-->
        <div class="mx-auto mt-20 max-w-3xl text-center">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">Real Assets for
            Unreal Storytelling</h2>
          <p class="mt-4 text-lg/8 text-gray-400">Curated image library of high-resolution imagery—shot with purpose and
            built for visual storytelling. Everything you need in one place to create with confidence.</p>
        </div>
        <div class="bg-black-950 py-18 sm:py-2">
          <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mb-20">
            <div class="mt-4 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
              <div class="flex p-px lg:col-span-4">
                <div
                  class="overflow-hidden rounded-lg bg-black-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                  <img class="h-80 object-cover object-left" src="~/public/images/home/bento/sky-hdri.jpg" alt="" />
                  <div class="p-10">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-white">360° 50k Panoramic Skies</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Captured at 50k resolution with 90-second
                      intervals, delivering unmatched clarity, light consistency, and dynamic range—so you can focus on
                      creating without compromise.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex p-px lg:col-span-2">
                <div class="overflow-hidden rounded-lg bg-black-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                  <img class="h-80 object-cover" src="~/public/images/home/bento/location-hdri.jpg" alt="" />
                  <div class="p-10">
                    <!--<h3 class="text-sm/4 font-semibold text-gray-400">360° 50k Location HDRIs</h3>-->
                    <p class="mt-2 text-3xl font-bold tracking-tight text-white">Location HDRIs</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Captured at 50k resolution with natural light,
                      multiple angles, and unclipped luminance—giving you the freedom to light your scenes with
                      intention.</p>
                  </div>
                </div>
              </div>
              <div class="flex p-px lg:col-span-2">
                <div class="overflow-hidden rounded-lg bg-black-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                  <img class="h-80 object-cover"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png" alt="" />
                  <div class="p-10">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-white">Reference Photography</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Captured with precision
                      and delivered in 32bit EXR or 16bit RAW—never compressed, never clipped. Shot by artists who
                      understand real-world pipelines, our library lets you find the right image faster.</p>
                  </div>
                </div>
              </div>
              <div class="flex p-px lg:col-span-4">
                <div
                  class="overflow-hidden rounded-lg bg-black-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                  <img class="h-80 object-cover object-left"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png" alt="" />
                  <div class="p-10">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-white">Risk-Free Copyright</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Industry-tailored copyright-safe asset licensing so
                      you never have
                      to second-guess what’s client-ready. Every image comes with clear, risk-free usage rights—so you
                      can create freely and deliver with confidence, now and in the
                      future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        <!--features/showcase-->
        <div class="overflow-hidden bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div class="lg:pr-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                  <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better
                    workflow</p>
                  <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  <div class="mt-8">
                    <a href="#"
                      class="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                      started</a>
                  </div>
                  <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                    <blockquote class="text-base/7">
                      <p>“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper
                        ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
                        enim tristique.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex gap-x-4 text-sm/6">
                      <img
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt="" class="size-6 flex-none rounded-full" />
                      <div><span class="font-semibold text-gray-900">Maria Hill</span> – Marketing Manager</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                width="2432" height="1442" />
            </div>
          </div>
        </div>
        <!--feature -->
        <div class="overflow-hidden bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:ml-auto lg:pl-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                  <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better
                    workflow</p>
                  <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                            clip-rule="evenodd" />
                        </svg>
                        Push to deploy.
                      </dt>
                      <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                        perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd" />
                        </svg>
                        SSL certificates.
                      </dt>
                      <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo.</dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path
                            d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                          <path fill-rule="evenodd"
                            d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                            clip-rule="evenodd" />
                        </svg>
                        Database backups.
                      </dt>
                      <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit
                        morbi lobortis.</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div class="flex items-start justify-end lg:order-first">
                <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                  alt="Product screenshot"
                  class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432"
                  height="1442" />
              </div>
            </div>
          </div>
        </div>
        <!--feature 3-->
        <div class="overflow-hidden bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div class="lg:pr-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                  <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better
                    workflow</p>
                  <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  <div class="mt-8">
                    <a href="#"
                      class="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                      started</a>
                  </div>
                  <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                    <blockquote class="text-base/7">
                      <p>“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper
                        ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
                        enim tristique.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex gap-x-4 text-sm/6">
                      <img
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt="" class="size-6 flex-none rounded-full" />
                      <div><span class="font-semibold text-gray-900">Maria Hill</span> – Marketing Manager</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                width="2432" height="1442" />
            </div>
          </div>
        </div>






        <!--pricing-->
        <form class="group/tiers bg-black-800 py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
              <h2 class="text-base/7 font-semibold text-accent-primary">Pricing</h2>
              <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Pricing that
                grows with you</p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
              Choose an affordable plan that’s packed with the best features for engaging your audience, creating
              customer loyalty, and driving sales.</p>
            <div class="mt-16 flex justify-center">
              <fieldset aria-label="Payment frequency">
                <div
                  class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
                  <label class="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-indigo-500">
                    <input type="radio" name="frequency" value="monthly" checked
                      class="absolute inset-0 appearance-none rounded-full" />
                    <span class="text-white">Monthly</span>
                  </label>
                  <label class="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-indigo-500">
                    <input type="radio" name="frequency" value="annually"
                      class="absolute inset-0 appearance-none rounded-full" />
                    <span class="text-white">Annually</span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div
                class="group/tier rounded-3xl p-8 ring-1 ring-white/10 data-[featured]:bg-white/5 data-[featured]:ring-2 data-[featured]:ring-indigo-500 xl:p-10">
                <div class="flex flex-col gap-4">
                  <div class="mb-4">
                    <img src="~public/images/personal-icon-pricing.svg" alt="Commercial plan icon" class="w-12 h-12" />
                  </div>
                  <h3 id="tier-freelancer" class="text-3xl/8 font-semibold text-white">Personal</h3>
                </div>
                <p class="mt-4 mb-8 text-sm/6 text-gray-300">Designed for solo artists or small studios earning under
                  $100K USD annually. Includes a single-seat personal license with access to high-resolution assets,
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
                  class="mt-6 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
                  <span class="text-4xl font-semibold tracking-tight text-white">$199</span>
                  <span class="text-sm/6 font-semibold text-gray-300">/year</span>
                </p>
                <button type="submit" name="tier" value="freelancer" aria-describedby="tier-freelancer"
                  class="mt-6 block w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-[featured]/tier:bg-indigo-500 group-data-[featured]/tier:text-white group-data-[featured]/tier:shadow-sm group-data-[featured]/tier:hover:bg-indigo-400 group-data-[featured]/tier:focus-visible:outline-indigo-500">Buy
                  plan</button>
              </div>
              <div
                class="group/tier rounded-3xl p-8 ring-1 ring-white/10 data-[featured]:bg-white/5 data-[featured]:ring-2 data-[featured]:ring-indigo-500 xl:p-10">
                <div class="flex flex-col gap-4">
                  <div class="mb-4">
                    <img src="~public/images/commercial-icon-pricing.svg" alt="Commercial plan icon"
                      class="w-12 h-12" />
                  </div>
                  <h3 id="tier-startup" class="text-3xl/8 font-semibold text-white">Commercial</h3>
                </div>
                <p class="mt-4 mb-8 text-sm/6 text-gray-300">Built for companies that need a robust, secure solution for
                  team-based production. Includes single-site licensing, advanced user management, IP-based login
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
                  class="mt-6 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
                  <span class="text-4xl font-semibold tracking-tight text-white">$299</span>
                  <span class="text-sm/6 font-semibold text-gray-300">/year</span>
                </p>
                <button type="submit" name="tier" value="startup" aria-describedby="tier-startup"
                  class="mt-6 block w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-[featured]/tier:bg-indigo-500 group-data-[featured]/tier:text-white group-data-[featured]/tier:shadow-sm group-data-[featured]/tier:hover:bg-indigo-400 group-data-[featured]/tier:focus-visible:outline-indigo-500">Buy
                  plan</button>
              </div>
            </div>
          </div>
        </form>


        <!--testimonials-->
        <section class="bg-background px-6 py-24 sm:py-32 lg:px-8">
          <figure class="mx-auto max-w-2xl">
            <p class="sr-only">5 out of 5 stars</p>
            <div class="flex gap-x-1 text-indigo-600">
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <blockquote class="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
              <p>“Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id
                minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet
                officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center gap-x-6">
              <img class="size-12 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                alt="" />
              <div class="text-sm/6">
                <div class="font-semibold text-gray-900">Judith Black</div>
                <div class="mt-0.5 text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </section>



        <!--blog-->
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog
              </h2>
              <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div>
            <div
              class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
                  <div class="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="flex gap-x-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" class="size-6 flex-none rounded-full bg-white/10">
                      Michael Foster
                    </div>
                  </div>
                </div>
                <h3 class="mt-3 text-lg/6 font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
              </article>

              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
                  <div class="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="flex gap-x-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" class="size-6 flex-none rounded-full bg-white/10">
                      Michael Foster
                    </div>
                  </div>
                </div>
                <h3 class="mt-3 text-lg/6 font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
              </article>

              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
                  <div class="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="flex gap-x-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" class="size-6 flex-none rounded-full bg-white/10">
                      Michael Foster
                    </div>
                  </div>
                </div>
                <h3 class="mt-3 text-lg/6 font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
              </article>

              <!-- More posts... -->
            </div>
          </div>
        </div>






      </main>
    </div>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// Account data
const account = ref({
  name: 'John Doe',
  email: 'john@example.com',
  password: '',
  timezone: 'UTC+10'
})

// Company data
const company = ref({
  name: 'Tech Solutions Inc.',
  address: '123 Tech Street, Sydney, NSW',
  industry: 'tech',
  darkMode: true
})

// Team members
const teamMembers = ref([
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    initials: 'JD'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    initials: 'JS'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Developer',
    initials: 'MJ'
  }
])

// New team member
const newTeamMember = ref({
  name: ''
})

// Billing data
const billing = ref({
  plan: 'Professional',
  price: 99,
  paymentMethod: {
    type: 'C',
    card: '**** **** **** 1234',
    expiry: '12/26'
  }
})

// Computed next payment date
const nextPaymentDate = computed(() => {
  const date = new Date()
  date.setMonth(date.getMonth() + 1)
  return date.toLocaleDateString()
})

// Methods
const saveAccount = () => {
  // Save account data logic here
  console.log('Saving account:', account.value)
}

const saveCompany = () => {
  // Save company data logic here
  console.log('Saving company:', company.value)
}

const addTeamMember = () => {
  if (newTeamMember.value.name.trim()) {
    const initials = newTeamMember.value.name
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()

    teamMembers.value.push({
      id: Date.now(),
      name: newTeamMember.value.name,
      role: 'New Member',
      initials
    })

    newTeamMember.value.name = ''
  }
}

const editMember = (member) => {
  // Edit member logic here
  console.log('Editing member:', member)
}

const removeMember = (member) => {
  // Remove member logic here
  const index = teamMembers.value.findIndex(m => m.id === member.id)
  if (index > -1) {
    teamMembers.value.splice(index, 1)
  }
}

const addPaymentMethod = () => {
  // Add payment method logic here
  console.log('Adding payment method')
}

const changePlan = () => {
  // Change plan logic here
  console.log('Changing plan')
}

const activeTab = ref('team') // Default to team tab
</script>