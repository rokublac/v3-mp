<template>
  <main>

    <div class="bg-white">
      <main>
        <div>
          <!-- Hero card -->
          <div class="relative">
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div class="absolute inset-0">
                  <img class="size-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops">
                  <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
                </div>
                <div class="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                  <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span class="block text-white">Take control of your</span>
                    <span class="block text-indigo-200">customer support</span>
                  </h1>
                  <p class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">Anim aute id magna
                    aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.</p>
                  <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a href="#"
                        class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">Get
                        started</a>
                      <a href="#"
                        class="flex items-center justify-center rounded-md border border-transparent bg-indigo-500/60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-500/70 sm:px-8">Live
                        demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Logo cloud -->
          <div class="bg-gray-100">
            <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <p class="text-center text-base font-semibold text-gray-500">Trusted by over 5 very average small
                businesses</p>
              <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple">
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage">
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit">
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor">
                </div>
                <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- More main page content here... -->

        <div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:hidden">
              <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
              <select aria-label="Select a tab"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                <option>My Account</option>
                <option>Company</option>
                <option selected>Team Members</option>
                <option>Billing</option>
              </select>
              <svg
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="hidden sm:block">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex" aria-label="Tabs">
                  <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                  <a href="#"
                    class="w-1/4 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">My
                    Account</a>
                  <a href="#"
                    class="w-1/4 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Company</a>
                  <a href="#"
                    class="w-1/4 border-b-2 border-indigo-500 px-1 py-4 text-center text-sm font-medium text-indigo-600"
                    aria-current="page">Team Members</a>
                  <a href="#"
                    class="w-1/4 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Billing</a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <!-- tab content-->

        <div class="overflow-hidden bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
              <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
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
              <div class="sm:px-6 lg:px-0">
                <div
                  class="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                  <div
                    class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                    aria-hidden="true"></div>
                  <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                    <img src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                      alt="Product screenshot" width="2432" height="1442"
                      class="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10">
                  </div>
                  <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                    aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>


              <!--stats-->
        <div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base/7 text-gray-400">Transactions every 24 hours</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">44 million</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base/7 text-gray-400">Assets under holding</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">$119 trillion</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base/7 text-gray-400">New users annually</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>


        <!--features-->
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
            <p class="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Everything you need to deploy your app</p>
            <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
              <div class="relative lg:col-span-3">
                <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
                <div
                  class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                  <img class="h-80 object-cover object-left"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png" alt="">
                  <div class="p-10 pt-4">
                    <h3 class="text-sm/4 font-semibold text-indigo-600">Performance</h3>
                    <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Lightning-fast builds</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.</p>
                  </div>
                </div>
                <div
                  class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                </div>
              </div>
              <div class="relative lg:col-span-3">
                <div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]"></div>
                <div
                  class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                  <img class="h-80 object-cover object-left lg:object-right"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png" alt="">
                  <div class="p-10 pt-4">
                    <h3 class="text-sm/4 font-semibold text-indigo-600">Releases</h3>
                    <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Push to deploy</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Curabitur auctor, ex quis auctor venenatis, eros
                      arcu rhoncus massa, laoreet dapibus ex elit vitae odio.</p>
                  </div>
                </div>
                <div
                  class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]">
                </div>
              </div>
              <div class="relative lg:col-span-2">
                <div class="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]"></div>
                <div
                  class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                  <img class="h-80 object-cover object-left"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png" alt="">
                  <div class="p-10 pt-4">
                    <h3 class="text-sm/4 font-semibold text-indigo-600">Speed</h3>
                    <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Built for power users</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Sed congue eros non finibus molestie. Vestibulum
                      euismod augue.</p>
                  </div>
                </div>
                <div
                  class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]">
                </div>
              </div>
              <div class="relative lg:col-span-2">
                <div class="absolute inset-px rounded-lg bg-white"></div>
                <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <img class="h-80 object-cover"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png" alt="">
                  <div class="p-10 pt-4">
                    <h3 class="text-sm/4 font-semibold text-indigo-600">Integrations</h3>
                    <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Connect your favorite tools</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Maecenas at augue sed elit dictum vulputate, in
                      nisi aliquam maximus arcu.</p>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
              </div>
              <div class="relative lg:col-span-2">
                <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
                <div
                  class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                  <img class="h-80 object-cover"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png" alt="">
                  <div class="p-10 pt-4">
                    <h3 class="text-sm/4 font-semibold text-indigo-600">Network</h3>
                    <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Globally distributed CDN</p>
                    <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Aenean vulputate justo commodo auctor vehicula in
                      malesuada semper.</p>
                  </div>
                </div>
                <div
                  class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--testimonial-->
        <div class="bg-white py-16 sm:py-24">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
      <img class="absolute inset-0 size-full object-cover brightness-150 saturate-0" src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80" alt="">
      <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
      <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="relative mx-auto max-w-2xl lg:mx-0">
        <img class="h-12 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-white.svg" alt="">
        <figure>
          <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl/8">
            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
          </blockquote>
          <figcaption class="mt-6 text-base text-white">
            <div class="font-semibold">Judith Black</div>
            <div class="mt-1">CEO of Workcation</div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>




        <!--pricing-->
        <div class="isolate overflow-hidden bg-gray-900">
          <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
            <div class="mx-auto max-w-4xl">
              <h2 class="text-base/7 font-semibold text-indigo-400">Pricing</h2>
              <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Choose the right
                plan for you</p>
            </div>
            <div class="relative mt-6">
              <p class="mx-auto max-w-2xl text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Choose an
                affordable plan that’s packed with the best features for engaging your audience, creating customer
                loyalty, and driving sales.</p>
              <svg viewBox="0 0 1208 1024"
                class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
                <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512" />
                <defs>
                  <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div class="flow-root bg-white pb-24 sm:pb-32">
            <div class="-mt-80">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                  <div
                    class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                    <div>
                      <h3 id="tier-hobby" class="text-base/7 font-semibold text-indigo-600">Hobby</h3>
                      <div class="mt-4 flex items-baseline gap-x-2">
                        <span class="text-5xl font-semibold tracking-tight text-gray-900">$29</span>
                        <span class="text-base/7 font-semibold text-gray-600">/month</span>
                      </div>
                      <p class="mt-6 text-base/7 text-gray-600">Modi dolorem expedita deleniti. Corporis iste qui
                        inventore pariatur adipisci vitae.</p>
                      <ul role="list" class="mt-10 space-y-4 text-sm/6 text-gray-600">
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          5 products
                        </li>
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          Up to 1,000 subscribers
                        </li>
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          Basic analytics
                        </li>
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          48-hour support response time
                        </li>
                      </ul>
                    </div>
                    <a href="#" aria-describedby="tier-hobby"
                      class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                      started today</a>
                  </div>
                  <div
                    class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                    <div>
                      <h3 id="tier-team" class="text-base/7 font-semibold text-indigo-600">Team</h3>
                      <div class="mt-4 flex items-baseline gap-x-2">
                        <span class="text-5xl font-semibold tracking-tight text-gray-900">$99</span>
                        <span class="text-base/7 font-semibold text-gray-600">/month</span>
                      </div>
                      <p class="mt-6 text-base/7 text-gray-600">Explicabo quo fugit vel facere ullam corrupti non
                        dolores. Expedita eius sit sequi.</p>
                      <ul role="list" class="mt-10 space-y-4 text-sm/6 text-gray-600">
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          Unlimited products
                        </li>
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          Unlimited subscribers
                        </li>
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          Advanced analytics
                        </li>
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          1-hour, dedicated support response time
                        </li>
                        <li class="flex gap-x-3">
                          <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd" />
                          </svg>
                          Marketing automations
                        </li>
                      </ul>
                    </div>
                    <a href="#" aria-describedby="tier-team"
                      class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                      started today</a>
                  </div>

                  <div
                    class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                    <div class="lg:min-w-0 lg:flex-1">
                      <h3 class="text-base/7 font-semibold text-indigo-600">Discounted</h3>
                      <p class="mt-1 text-base/7 text-gray-600">Dolor dolores repudiandae doloribus. Rerum sunt aut eum.
                        Odit omnis non voluptatem sunt eos nostrum.</p>
                    </div>
                    <a href="#"
                      class="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy
                      discounted license <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--blog-->
        <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
    </div>
    <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" class="absolute inset-0 -z-10 size-full object-cover">
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
          <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-6 flex-none rounded-full bg-white/10">
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

      <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" class="absolute inset-0 -z-10 size-full object-cover">
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
          <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-6 flex-none rounded-full bg-white/10">
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

      <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" class="absolute inset-0 -z-10 size-full object-cover">
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
          <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-6 flex-none rounded-full bg-white/10">
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