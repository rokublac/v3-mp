<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Trusted by creators worldwide</h2>
            <p class="mt-4 text-lg/8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing possimus.</p>
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-gray-400/5 p-8">
              <dt class="text-sm/6 font-semibold text-gray-600">{{ stat.name }}</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
  ]
  </script>