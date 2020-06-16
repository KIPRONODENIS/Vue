<template>
	<nav class="w-full bg-white flex justify-between shadow-sm ">
		<LeftSideBar />
		<h1 class="text-sm font-bold uppercase flex items-center w-full mx-6">Your DashBoard</h1>
        <RightSideBar />
	</nav>
</template>

<script type="text/javascript">
import LeftSideBar from './LeftSideBar.vue'
import RightSideBar from './RightSideBar.vue'
	export default {
		name:"Header",
		components:{
			LeftSideBar,
			RightSideBar

		}
	};
</script>

