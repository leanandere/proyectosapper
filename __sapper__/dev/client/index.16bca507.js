import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, l as text, r as space, E as svg_element, a as claim_element, b as children, m as claim_text, f as detach_dev, w as claim_space, g as attr_dev, h as add_location, j as insert_dev, n as append_dev, p as noop, y as create_component, F as query_selector_all, z as claim_component, B as mount_component, t as transition_in, k as transition_out, C as destroy_component } from './client.c855041f.js';
import { P as Price } from './Price.426aa9f0.js';

/* src\components\Cv.svelte generated by Svelte v3.38.2 */

const file = "src\\components\\Cv.svelte";

function create_fragment$1(ctx) {
	let div1;
	let div0;
	let span0;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let a0;
	let t4;
	let t5;
	let svg0;
	let path0;
	let t6;
	let header;
	let div4;
	let div2;
	let svg1;
	let path1;
	let t7;
	let span1;
	let t8;
	let t9;
	let div3;
	let nav;
	let a1;
	let t10;
	let t11;
	let a2;
	let t12;
	let t13;
	let a3;
	let t14;
	let t15;
	let button;
	let span2;
	let t16;
	let span3;
	let t17;
	let span4;
	let t18;
	let div8;
	let div7;
	let div6;
	let img;
	let img_src_value;
	let t19;
	let p1;
	let t20;
	let t21;
	let h2;
	let t22;
	let t23;
	let div5;
	let a4;
	let t24;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			span0 = element("span");
			t0 = text("🎨");
			t1 = space();
			p0 = element("p");
			t2 = text("Got a project ? / Tienes un proyecto?");
			t3 = space();
			a0 = element("a");
			t4 = text("Let's talk  / Charlemos !");
			t5 = space();
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t6 = space();
			header = element("header");
			div4 = element("div");
			div2 = element("div");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			t7 = space();
			span1 = element("span");
			t8 = text("leanandere@gmail.com");
			t9 = space();
			div3 = element("div");
			nav = element("nav");
			a1 = element("a");
			t10 = text("Trabajos");
			t11 = space();
			a2 = element("a");
			t12 = text("CV");
			t13 = space();
			a3 = element("a");
			t14 = text("Contacto");
			t15 = space();
			button = element("button");
			span2 = element("span");
			t16 = space();
			span3 = element("span");
			t17 = space();
			span4 = element("span");
			t18 = space();
			div8 = element("div");
			div7 = element("div");
			div6 = element("div");
			img = element("img");
			t19 = space();
			p1 = element("p");
			t20 = text("Hi, I'm Leandro 🤘");
			t21 = space();
			h2 = element("h2");
			t22 = text("Diseñador y desarrollador WEB.");
			t23 = space();
			div5 = element("div");
			a4 = element("a");
			t24 = text("PUEDE DARME DINERO ?");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span0 = claim_element(div0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "🎨");
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Got a project ? / Tienes un proyecto?");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			a0 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t4 = claim_text(a0_nodes, "Let's talk  / Charlemos !");
			a0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			svg0 = claim_element(div1_nodes, "svg", { viewBox: true, class: true, xmlns: true }, 1);
			var svg0_nodes = children(svg0);
			path0 = claim_element(svg0_nodes, "path", { fill: true, d: true, transform: true }, 1);
			var path0_nodes = children(path0);
			path0_nodes.forEach(detach_dev);
			svg0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			div4 = claim_element(header_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			svg1 = claim_element(
				div2_nodes,
				"svg",
				{
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true
				},
				1
			);

			var svg1_nodes = children(svg1);
			path1 = claim_element(svg1_nodes, "path", { d: true }, 1);
			var path1_nodes = children(path1);
			path1_nodes.forEach(detach_dev);
			svg1_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			span1 = claim_element(div2_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t8 = claim_text(span1_nodes, "leanandere@gmail.com");
			span1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t9 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			nav = claim_element(div3_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			a1 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t10 = claim_text(a1_nodes, "Trabajos");
			a1_nodes.forEach(detach_dev);
			t11 = claim_space(nav_nodes);
			a2 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t12 = claim_text(a2_nodes, "CV");
			a2_nodes.forEach(detach_dev);
			t13 = claim_space(nav_nodes);
			a3 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t14 = claim_text(a3_nodes, "Contacto");
			a3_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			t15 = claim_space(div3_nodes);
			button = claim_element(div3_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			span2 = claim_element(button_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			span2_nodes.forEach(detach_dev);
			t16 = claim_space(button_nodes);
			span3 = claim_element(button_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			span3_nodes.forEach(detach_dev);
			t17 = claim_space(button_nodes);
			span4 = claim_element(button_nodes, "SPAN", { class: true });
			var span4_nodes = children(span4);
			span4_nodes.forEach(detach_dev);
			button_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			img = claim_element(div6_nodes, "IMG", { src: true, class: true });
			t19 = claim_space(div6_nodes);
			p1 = claim_element(div6_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t20 = claim_text(p1_nodes, "Hi, I'm Leandro 🤘");
			p1_nodes.forEach(detach_dev);
			t21 = claim_space(div6_nodes);
			h2 = claim_element(div6_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t22 = claim_text(h2_nodes, "Diseñador y desarrollador WEB.");
			h2_nodes.forEach(detach_dev);
			t23 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			a4 = claim_element(div5_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t24 = claim_text(a4_nodes, "PUEDE DARME DINERO ?");
			a4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "text-7xl");
			add_location(span0, file, 6, 8, 187);
			add_location(p0, file, 9, 8, 253);
			attr_dev(a0, "href", "#");
			attr_dev(a0, "class", "underline");
			add_location(a0, file, 12, 8, 331);
			attr_dev(div0, "class", "absolute text-extrabold text-xl right-12 z-20 text-start top-1/4");
			add_location(div0, file, 5, 4, 99);
			attr_dev(path0, "fill", "#FFDBB9");
			attr_dev(path0, "d", "M44.7,-76.4C58.8,-70.2,61.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z");
			attr_dev(path0, "transform", "translate(100 100)");
			add_location(path0, file, 17, 8, 540);
			attr_dev(svg0, "viewBox", "0 0 200 200");
			attr_dev(svg0, "class", "absolute w-full h-full");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg0, file, 16, 4, 437);
			attr_dev(div1, "class", "hidden md:block absolute -bottom-32 -left-32 w-96 h-96");
			add_location(div1, file, 4, 0, 25);
			attr_dev(path1, "d", "M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z");
			add_location(path1, file, 25, 16, 1405);
			attr_dev(svg1, "width", "25");
			attr_dev(svg1, "height", "25");
			attr_dev(svg1, "viewBox", "0 0 1792 1792");
			attr_dev(svg1, "fill", "currentColor");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg1, file, 24, 12, 1280);
			attr_dev(span1, "class", "text-xs ml-3 mt-1");
			add_location(span1, file, 28, 12, 2030);
			attr_dev(div2, "class", "uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center");
			add_location(div2, file, 23, 8, 1175);
			attr_dev(a1, "href", "#");
			attr_dev(a1, "class", "py-2 px-6 flex hover:text-black");
			add_location(a1, file, 34, 16, 2299);
			attr_dev(a2, "href", "#");
			attr_dev(a2, "class", "py-2 px-6 flex hover:text-black");
			add_location(a2, file, 37, 16, 2421);
			attr_dev(a3, "href", "#");
			attr_dev(a3, "class", "py-2 px-6 flex hover:text-black");
			add_location(a3, file, 40, 16, 2537);
			attr_dev(nav, "class", "font-sen text-gray-900 dark:text-white  text-lg lg:flex items-center hidden");
			add_location(nav, file, 33, 12, 2192);
			attr_dev(span2, "class", "w-6 h-1 bg-gray-800 dark:bg-white mb-1");
			add_location(span2, file, 45, 16, 2738);
			attr_dev(span3, "class", "w-6 h-1 bg-gray-800 dark:bg-white mb-1");
			add_location(span3, file, 47, 16, 2834);
			attr_dev(span4, "class", "w-6 h-1 bg-gray-800 dark:bg-white mb-1");
			add_location(span4, file, 49, 16, 2930);
			attr_dev(button, "class", "lg:hidden flex flex-col ml-4");
			add_location(button, file, 44, 12, 2675);
			attr_dev(div3, "class", "flex items-center");
			add_location(div3, file, 32, 8, 2147);
			attr_dev(div4, "class", "container mx-auto px-6 flex items-center justify-between");
			add_location(div4, file, 22, 4, 1095);
			attr_dev(header, "class", "h-24 sm:h-32 flex items-center z-30 w-full");
			add_location(header, file, 21, 0, 1030);
			if (img.src !== (img_src_value = "")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "rounded-full w-28 mx-auto");
			add_location(img, file, 59, 12, 3326);
			attr_dev(p1, "class", "text-3xl my-6 text-center dark:text-white");
			add_location(p1, file, 60, 12, 3387);
			attr_dev(h2, "class", "max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2");
			add_location(h2, file, 63, 12, 3513);
			attr_dev(a4, "href", "#");
			attr_dev(a4, "class", "uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md");
			add_location(a4, file, 67, 16, 3771);
			attr_dev(div5, "class", "flex items-center justify-center mt-4");
			add_location(div5, file, 66, 12, 3702);
			attr_dev(div6, "class", "flex flex-col");
			add_location(div6, file, 57, 8, 3226);
			attr_dev(div7, "class", "container mx-auto px-6 flex flex-col justify-between items-center relative py-4");
			add_location(div7, file, 56, 4, 3123);
			attr_dev(div8, "class", "flex relative z-20 items-center");
			add_location(div8, file, 55, 0, 3072);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, span0);
			append_dev(span0, t0);
			append_dev(div0, t1);
			append_dev(div0, p0);
			append_dev(p0, t2);
			append_dev(div0, t3);
			append_dev(div0, a0);
			append_dev(a0, t4);
			append_dev(div1, t5);
			append_dev(div1, svg0);
			append_dev(svg0, path0);
			insert_dev(target, t6, anchor);
			insert_dev(target, header, anchor);
			append_dev(header, div4);
			append_dev(div4, div2);
			append_dev(div2, svg1);
			append_dev(svg1, path1);
			append_dev(div2, t7);
			append_dev(div2, span1);
			append_dev(span1, t8);
			append_dev(div4, t9);
			append_dev(div4, div3);
			append_dev(div3, nav);
			append_dev(nav, a1);
			append_dev(a1, t10);
			append_dev(nav, t11);
			append_dev(nav, a2);
			append_dev(a2, t12);
			append_dev(nav, t13);
			append_dev(nav, a3);
			append_dev(a3, t14);
			append_dev(div3, t15);
			append_dev(div3, button);
			append_dev(button, span2);
			append_dev(button, t16);
			append_dev(button, span3);
			append_dev(button, t17);
			append_dev(button, span4);
			insert_dev(target, t18, anchor);
			insert_dev(target, div8, anchor);
			append_dev(div8, div7);
			append_dev(div7, div6);
			append_dev(div6, img);
			append_dev(div6, t19);
			append_dev(div6, p1);
			append_dev(p1, t20);
			append_dev(div6, t21);
			append_dev(div6, h2);
			append_dev(h2, t22);
			append_dev(div6, t23);
			append_dev(div6, div5);
			append_dev(div5, a4);
			append_dev(a4, t24);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(header);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(div8);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Cv", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Cv> was created with unknown prop '${key}'`);
	});

	return [];
}

class Cv extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cv",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src\routes\blog\index.svelte generated by Svelte v3.38.2 */

function create_fragment(ctx) {
	let t;
	let cv;
	let current;
	cv = new Cv({ $$inline: true });

	const block = {
		c: function create() {
			t = space();
			create_component(cv.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-hfp9t8\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(cv.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Blog";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(cv, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(cv.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cv.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_component(cv, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Blog", slots, []);
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({ preload, Cv, Price, posts });

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Blog> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blog;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTZiY2E1MDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoKGBibG9nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocG9zdHMgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwb3N0cyB9O1xyXG5cdFx0fSk7XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Ddi5zdmVsdGVcIjtcclxuaW1wb3J0IFByaWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ByaWNlLnN2ZWx0ZVwiO1xyXG5cclxuXHRleHBvcnQgbGV0IHBvc3RzO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHR1bCB7XHJcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT5CbG9nPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxDdj48L0N2PlxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FDaUIsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLO1dBQ25ELEtBQUs7Ozs7Ozs7T0FTTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
