import * as Pages from './pages/mappings.js';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		const pageName = url.pathname.slice(1) || 'page1';
		const htmlHeader = { headers: { "Content-Type": "text/html; charset=utf-8" } };// 1. 홈 경로 (/)
		const render = Pages[pageName];

		let data = { title: "기본 타이틀", content: pageName };

		if(render) {
			return new Response(render(data), htmlHeader);
		} else {
			return new Response({status:404, ...htmlHeader});
		}
	},
};