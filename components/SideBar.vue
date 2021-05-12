<template>
    <aside class="menu" id="sidebar">
        <p class="menu-label">
            FocusOP
        </p>
        <p class="menu-label">
            <i class="fal fa-horizontal-rule"></i> Lối tắt
        </p>
        <ul class="menu-list">
            <li><NuxtLink to="/home"><i class="fal fa-home"></i> Trang chính</NuxtLink></li>
            <li>
            <a><i class="fal fa-history"></i>Gần đây <span class="tag is-light"><b>2</b></span></a>
            <ul>
                <li><a><i class="fal fa-file-powerpoint"></i>Bài giảng.fop</a></li>
                <li><a><i class="fal fa-file-powerpoint"></i>lmao.fop</a></li>
            </ul>
            </li>
            <li><NuxtLink to="/explore"><i class="fal fa-folders"></i>Quản lí file</NuxtLink></li>
            <li><NuxtLink to="/info"><i class="fal fa-info-square"></i> Thông tin</NuxtLink></li>
        </ul>
        <p class="menu-label">
            <i class="fal fa-horizontal-rule"></i> Về sản phẩm
        </p>
        <ul class="menu-list">
            <li><NuxtLink to="/about"><i class="fal fa-presentation"></i>Giới thiệu</NuxtLink></li>
            <li><a href="https://www.github.com/qninhdt/focusop"><i class="fal fa-code"></i>Mã nguồn</a></li>
        </ul>
        </aside>
</template>

<style>
    #sidebar {
        padding: 2rem;
        font-size: 1rem;
        border-right: 1px solid #8464db;
    }
    #sidebar a.nuxt-link-active {
        background-color: #714dd2;
        color: white;
    }
    #sidebar > .menu-label {
        margin-top: 1.5rem;
    }
</style>