---
layout: page
title: Videos
description: Watch engaging lectures about the prophets and their teachings
hero: true
---

<!-- Category Filters -->
<div class="mb-12">
    <div class="flex flex-wrap justify-center gap-3">
        <button class="video-filter active bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors" data-category="all">
            All Videos
        </button>
        {% assign video_categories = site.videos | map: "category" | uniq %}
        {% for category in video_categories %}
        <button class="video-filter bg-white text-gray-700 border border-gray-200 px-6 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors" data-category="{{ category }}">
            {{ category | capitalize }}
        </button>
        {% endfor %}
    </div>
</div>

<!-- Videos Grid -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {% for video in site.videos %}
    <div class="video-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-category="{{ video.category }}">
        <div class="relative aspect-w-16 aspect-h-9 bg-gradient-to-br {{ video.gradient | default: 'from-emerald-500 to-teal-600' }}">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-200">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
            {% if video.duration %}
            <div class="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">{{ video.duration }}</div>
            {% endif %}
        </div>
        <div class="p-6">
            <h3 class="text-xl font-serif mb-2 group-hover:text-emerald-600 transition-colors">
                {% if video.url %}
                <a href="{{ video.url | relative_url }}">{{ video.title }}</a>
                {% else %}
                {{ video.title }}
                {% endif %}
            </h3>
            {% if video.description %}
            <p class="text-gray-600 text-sm mb-3">{{ video.description }}</p>
            {% endif %}
            <div class="flex items-center justify-between text-sm text-gray-500">
                {% if video.speaker %}
                <span>{{ video.speaker }}</span>
                {% endif %}
                {% if video.views %}
                <span>{{ video.views }} views</span>
                {% endif %}
            </div>
        </div>
    </div>
    {% endfor %}
</div>

{% if site.videos.size == 0 %}
<!-- Placeholder content if no videos exist -->
<div class="text-center py-16">
    <h3 class="text-2xl font-serif mb-4">Videos Coming Soon</h3>
    <p class="text-gray-600 mb-8">We're curating inspiring video content about the prophets.</p>
    <a href="{{ '/' | relative_url }}" class="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors">
        Return Home
    </a>
</div>
{% endif %}