import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, r as space, l as text, a as claim_element, b as children, w as claim_space, m as claim_text, f as detach_dev, g as attr_dev, h as add_location, F as set_style, j as insert_dev, n as append_dev, p as noop, y as create_component, E as query_selector_all, z as claim_component, B as mount_component, t as transition_in, k as transition_out, C as destroy_component } from './client.c5593a4e.js';
import { P as Price } from './Price.4d42f577.js';

/* src\components\Carrousel.svelte generated by Svelte v3.38.2 */

const file$1 = "src\\components\\Carrousel.svelte";

function create_fragment$2(ctx) {
	let body;
	let div7;
	let div6;
	let input0;
	let t0;
	let div1;
	let div0;
	let t1;
	let t2;
	let label0;
	let t3;
	let t4;
	let label1;
	let t5;
	let t6;
	let input1;
	let t7;
	let div3;
	let div2;
	let t8;
	let t9;
	let label2;
	let t10;
	let t11;
	let label3;
	let t12;
	let t13;
	let input2;
	let t14;
	let div5;
	let div4;
	let t15;
	let t16;
	let label4;
	let t17;
	let t18;
	let label5;
	let t19;
	let t20;
	let ol;
	let li0;
	let label6;
	let t21;
	let t22;
	let li1;
	let label7;
	let t23;
	let t24;
	let li2;
	let label8;
	let t25;

	const block = {
		c: function create() {
			body = element("body");
			div7 = element("div");
			div6 = element("div");
			input0 = element("input");
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			t1 = text("Slide 1");
			t2 = space();
			label0 = element("label");
			t3 = text("‹");
			t4 = space();
			label1 = element("label");
			t5 = text("›");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div3 = element("div");
			div2 = element("div");
			t8 = text("Slide 2");
			t9 = space();
			label2 = element("label");
			t10 = text("‹");
			t11 = space();
			label3 = element("label");
			t12 = text("›");
			t13 = space();
			input2 = element("input");
			t14 = space();
			div5 = element("div");
			div4 = element("div");
			t15 = text("Slide 3");
			t16 = space();
			label4 = element("label");
			t17 = text("‹");
			t18 = space();
			label5 = element("label");
			t19 = text("›");
			t20 = space();
			ol = element("ol");
			li0 = element("li");
			label6 = element("label");
			t21 = text("•");
			t22 = space();
			li1 = element("li");
			label7 = element("label");
			t23 = text("•");
			t24 = space();
			li2 = element("li");
			label8 = element("label");
			t25 = text("•");
			this.h();
		},
		l: function claim(nodes) {
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			div7 = claim_element(body_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);

			input0 = claim_element(div6_nodes, "INPUT", {
				class: true,
				type: true,
				id: true,
				name: true,
				"aria-hidden": true,
				hidden: true,
				checked: true
			});

			t0 = claim_space(div6_nodes);
			div1 = claim_element(div6_nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t1 = claim_text(div0_nodes, "Slide 1");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div6_nodes);
			label0 = claim_element(div6_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = children(label0);
			t3 = claim_text(label0_nodes, "‹");
			label0_nodes.forEach(detach_dev);
			t4 = claim_space(div6_nodes);
			label1 = claim_element(div6_nodes, "LABEL", { for: true, class: true });
			var label1_nodes = children(label1);
			t5 = claim_text(label1_nodes, "›");
			label1_nodes.forEach(detach_dev);
			t6 = claim_space(div6_nodes);

			input1 = claim_element(div6_nodes, "INPUT", {
				class: true,
				type: true,
				id: true,
				name: true,
				"aria-hidden": true,
				hidden: true
			});

			t7 = claim_space(div6_nodes);
			div3 = claim_element(div6_nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t8 = claim_text(div2_nodes, "Slide 2");
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t9 = claim_space(div6_nodes);
			label2 = claim_element(div6_nodes, "LABEL", { for: true, class: true });
			var label2_nodes = children(label2);
			t10 = claim_text(label2_nodes, "‹");
			label2_nodes.forEach(detach_dev);
			t11 = claim_space(div6_nodes);
			label3 = claim_element(div6_nodes, "LABEL", { for: true, class: true });
			var label3_nodes = children(label3);
			t12 = claim_text(label3_nodes, "›");
			label3_nodes.forEach(detach_dev);
			t13 = claim_space(div6_nodes);

			input2 = claim_element(div6_nodes, "INPUT", {
				class: true,
				type: true,
				id: true,
				name: true,
				"aria-hidden": true,
				hidden: true
			});

			t14 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true, style: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t15 = claim_text(div4_nodes, "Slide 3");
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t16 = claim_space(div6_nodes);
			label4 = claim_element(div6_nodes, "LABEL", { for: true, class: true });
			var label4_nodes = children(label4);
			t17 = claim_text(label4_nodes, "‹");
			label4_nodes.forEach(detach_dev);
			t18 = claim_space(div6_nodes);
			label5 = claim_element(div6_nodes, "LABEL", { for: true, class: true });
			var label5_nodes = children(label5);
			t19 = claim_text(label5_nodes, "›");
			label5_nodes.forEach(detach_dev);
			t20 = claim_space(div6_nodes);
			ol = claim_element(div6_nodes, "OL", { class: true });
			var ol_nodes = children(ol);
			li0 = claim_element(ol_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			label6 = claim_element(li0_nodes, "LABEL", { for: true, class: true });
			var label6_nodes = children(label6);
			t21 = claim_text(label6_nodes, "•");
			label6_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t22 = claim_space(ol_nodes);
			li1 = claim_element(ol_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			label7 = claim_element(li1_nodes, "LABEL", { for: true, class: true });
			var label7_nodes = children(label7);
			t23 = claim_text(label7_nodes, "•");
			label7_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t24 = claim_space(ol_nodes);
			li2 = claim_element(ol_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			label8 = claim_element(li2_nodes, "LABEL", { for: true, class: true });
			var label8_nodes = children(label8);
			t25 = claim_text(label8_nodes, "•");
			label8_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			ol_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(input0, "class", "carousel-open svelte-lxoetu");
			attr_dev(input0, "type", "radio");
			attr_dev(input0, "id", "carousel-1");
			attr_dev(input0, "name", "carousel");
			attr_dev(input0, "aria-hidden", "true");
			input0.hidden = "";
			input0.checked = "checked";
			add_location(input0, file$1, 49, 2, 1078);
			attr_dev(div0, "class", "block h-full w-full bg-indigo-500 text-white text-5xl text-center");
			add_location(div0, file$1, 51, 3, 1275);
			attr_dev(div1, "class", "carousel-item absolute opacity-0 svelte-lxoetu");
			set_style(div1, "height", "50vh");
			add_location(div1, file$1, 50, 2, 1203);
			attr_dev(label0, "for", "carousel-3");
			attr_dev(label0, "class", "prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto svelte-lxoetu");
			add_location(label0, file$1, 53, 2, 1381);
			attr_dev(label1, "for", "carousel-2");
			attr_dev(label1, "class", "next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto svelte-lxoetu");
			add_location(label1, file$1, 54, 2, 1639);
			attr_dev(input1, "class", "carousel-open svelte-lxoetu");
			attr_dev(input1, "type", "radio");
			attr_dev(input1, "id", "carousel-2");
			attr_dev(input1, "name", "carousel");
			attr_dev(input1, "aria-hidden", "true");
			input1.hidden = "";
			add_location(input1, file$1, 57, 2, 1920);
			attr_dev(div2, "class", "block h-full w-full bg-orange-500 text-white text-5xl text-center");
			add_location(div2, file$1, 59, 3, 2099);
			attr_dev(div3, "class", "carousel-item absolute opacity-0 svelte-lxoetu");
			set_style(div3, "height", "50vh");
			add_location(div3, file$1, 58, 2, 2027);
			attr_dev(label2, "for", "carousel-1");
			attr_dev(label2, "class", "prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto svelte-lxoetu");
			add_location(label2, file$1, 61, 2, 2205);
			attr_dev(label3, "for", "carousel-3");
			attr_dev(label3, "class", "next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto svelte-lxoetu");
			add_location(label3, file$1, 62, 2, 2463);
			attr_dev(input2, "class", "carousel-open svelte-lxoetu");
			attr_dev(input2, "type", "radio");
			attr_dev(input2, "id", "carousel-3");
			attr_dev(input2, "name", "carousel");
			attr_dev(input2, "aria-hidden", "true");
			input2.hidden = "";
			add_location(input2, file$1, 65, 2, 2745);
			attr_dev(div4, "class", "block h-full w-full bg-green-500 text-white text-5xl text-center");
			add_location(div4, file$1, 67, 3, 2924);
			attr_dev(div5, "class", "carousel-item absolute opacity-0 svelte-lxoetu");
			set_style(div5, "height", "50vh");
			add_location(div5, file$1, 66, 2, 2852);
			attr_dev(label4, "for", "carousel-2");
			attr_dev(label4, "class", "prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto svelte-lxoetu");
			add_location(label4, file$1, 69, 2, 3029);
			attr_dev(label5, "for", "carousel-1");
			attr_dev(label5, "class", "next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto svelte-lxoetu");
			add_location(label5, file$1, 70, 2, 3287);
			attr_dev(label6, "for", "carousel-1");
			attr_dev(label6, "class", "carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700 svelte-lxoetu");
			add_location(label6, file$1, 75, 4, 3673);
			attr_dev(li0, "class", "inline-block mr-3");
			add_location(li0, file$1, 74, 3, 3637);
			attr_dev(label7, "for", "carousel-2");
			attr_dev(label7, "class", "carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700 svelte-lxoetu");
			add_location(label7, file$1, 78, 4, 3842);
			attr_dev(li1, "class", "inline-block mr-3");
			add_location(li1, file$1, 77, 3, 3806);
			attr_dev(label8, "for", "carousel-3");
			attr_dev(label8, "class", "carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700 svelte-lxoetu");
			add_location(label8, file$1, 81, 4, 4011);
			attr_dev(li2, "class", "inline-block mr-3");
			add_location(li2, file$1, 80, 3, 3975);
			attr_dev(ol, "class", "carousel-indicators svelte-lxoetu");
			add_location(ol, file$1, 73, 2, 3600);
			attr_dev(div6, "class", "carousel-inner relative overflow-hidden w-full");
			add_location(div6, file$1, 47, 1, 995);
			attr_dev(div7, "class", "carousel relative shadow-2xl bg-white");
			add_location(div7, file$1, 46, 0, 941);
			attr_dev(body, "class", "bg-white font-sans leading-normal tracking-normal");
			add_location(body, file$1, 44, 0, 873);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, div7);
			append_dev(div7, div6);
			append_dev(div6, input0);
			append_dev(div6, t0);
			append_dev(div6, div1);
			append_dev(div1, div0);
			append_dev(div0, t1);
			append_dev(div6, t2);
			append_dev(div6, label0);
			append_dev(label0, t3);
			append_dev(div6, t4);
			append_dev(div6, label1);
			append_dev(label1, t5);
			append_dev(div6, t6);
			append_dev(div6, input1);
			append_dev(div6, t7);
			append_dev(div6, div3);
			append_dev(div3, div2);
			append_dev(div2, t8);
			append_dev(div6, t9);
			append_dev(div6, label2);
			append_dev(label2, t10);
			append_dev(div6, t11);
			append_dev(div6, label3);
			append_dev(label3, t12);
			append_dev(div6, t13);
			append_dev(div6, input2);
			append_dev(div6, t14);
			append_dev(div6, div5);
			append_dev(div5, div4);
			append_dev(div4, t15);
			append_dev(div6, t16);
			append_dev(div6, label4);
			append_dev(label4, t17);
			append_dev(div6, t18);
			append_dev(div6, label5);
			append_dev(label5, t19);
			append_dev(div6, t20);
			append_dev(div6, ol);
			append_dev(ol, li0);
			append_dev(li0, label6);
			append_dev(label6, t21);
			append_dev(ol, t22);
			append_dev(ol, li1);
			append_dev(li1, label7);
			append_dev(label7, t23);
			append_dev(ol, t24);
			append_dev(ol, li2);
			append_dev(li2, label8);
			append_dev(label8, t25);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(body);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Carrousel", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Carrousel> was created with unknown prop '${key}'`);
	});

	return [];
}

class Carrousel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Carrousel",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src\components\Inputs.svelte generated by Svelte v3.38.2 */

const file = "src\\components\\Inputs.svelte";

function create_fragment$1(ctx) {
	let section;
	let div3;
	let div2;
	let div0;
	let label0;
	let t0;
	let t1;
	let input0;
	let t2;
	let div1;
	let label1;
	let t3;
	let t4;
	let input1;
	let t5;
	let button0;
	let t6;
	let t7;
	let div7;
	let div6;
	let div4;
	let label2;
	let t8;
	let t9;
	let input2;
	let t10;
	let div5;
	let label3;
	let t11;
	let t12;
	let input3;
	let t13;
	let button1;
	let t14;

	const block = {
		c: function create() {
			section = element("section");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full Name");
			t1 = space();
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			label1 = element("label");
			t3 = text("Email");
			t4 = space();
			input1 = element("input");
			t5 = space();
			button0 = element("button");
			t6 = text("Button");
			t7 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			label2 = element("label");
			t8 = text("Full Name");
			t9 = space();
			input2 = element("input");
			t10 = space();
			div5 = element("div");
			label3 = element("label");
			t11 = text("Email");
			t12 = space();
			input3 = element("input");
			t13 = space();
			button1 = element("button");
			t14 = text("Button");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			label0 = claim_element(div0_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = children(label0);
			t0 = claim_text(label0_nodes, "Full Name");
			label0_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);

			input0 = claim_element(div0_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			label1 = claim_element(div1_nodes, "LABEL", { for: true, class: true });
			var label1_nodes = children(label1);
			t3 = claim_text(label1_nodes, "Email");
			label1_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);

			input1 = claim_element(div1_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div2_nodes);
			button0 = claim_element(div2_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t6 = claim_text(button0_nodes, "Button");
			button0_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			div7 = claim_element(section_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			label2 = claim_element(div4_nodes, "LABEL", { for: true, class: true });
			var label2_nodes = children(label2);
			t8 = claim_text(label2_nodes, "Full Name");
			label2_nodes.forEach(detach_dev);
			t9 = claim_space(div4_nodes);

			input2 = claim_element(div4_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div4_nodes.forEach(detach_dev);
			t10 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			label3 = claim_element(div5_nodes, "LABEL", { for: true, class: true });
			var label3_nodes = children(label3);
			t11 = claim_text(label3_nodes, "Email");
			label3_nodes.forEach(detach_dev);
			t12 = claim_space(div5_nodes);

			input3 = claim_element(div5_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div5_nodes.forEach(detach_dev);
			t13 = claim_space(div6_nodes);
			button1 = claim_element(div6_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t14 = claim_text(button1_nodes, "Button");
			button1_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label0, "for", "full-name");
			attr_dev(label0, "class", "leading-7 text-sm text-gray-400");
			add_location(label0, file, 4, 10, 300);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "id", "full-name");
			attr_dev(input0, "name", "full-name");
			attr_dev(input0, "class", "w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out");
			add_location(input0, file, 5, 10, 392);
			attr_dev(div0, "class", "relative sm:mb-0 flex-grow w-full");
			add_location(div0, file, 3, 8, 241);
			attr_dev(label1, "for", "email");
			attr_dev(label1, "class", "leading-7 text-sm text-gray-400");
			add_location(label1, file, 8, 10, 776);
			attr_dev(input1, "type", "email");
			attr_dev(input1, "id", "email");
			attr_dev(input1, "name", "email");
			attr_dev(input1, "class", "w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out");
			add_location(input1, file, 9, 10, 860);
			attr_dev(div1, "class", "relative sm:mb-0 flex-grow w-full");
			add_location(div1, file, 7, 8, 717);
			attr_dev(button0, "class", "text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg");
			add_location(button0, file, 11, 8, 1178);
			attr_dev(div2, "class", "flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4");
			add_location(div2, file, 2, 6, 109);
			attr_dev(div3, "class", "container px-6 py-10 mx-auto");
			add_location(div3, file, 1, 4, 59);
			attr_dev(label2, "for", "full-name");
			attr_dev(label2, "class", "leading-7 text-sm text-gray-400");
			add_location(label2, file, 17, 12, 1583);
			attr_dev(input2, "type", "text");
			attr_dev(input2, "id", "full-name");
			attr_dev(input2, "name", "full-name");
			attr_dev(input2, "class", "w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out");
			add_location(input2, file, 18, 12, 1677);
			attr_dev(div4, "class", "relative sm:mb-0 flex-grow w-full");
			add_location(div4, file, 16, 10, 1522);
			attr_dev(label3, "for", "email");
			attr_dev(label3, "class", "leading-7 text-sm text-gray-400");
			add_location(label3, file, 21, 12, 2067);
			attr_dev(input3, "type", "email");
			attr_dev(input3, "id", "email");
			attr_dev(input3, "name", "email");
			attr_dev(input3, "class", "w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out");
			add_location(input3, file, 22, 12, 2153);
			attr_dev(div5, "class", "relative sm:mb-0 flex-grow w-full");
			add_location(div5, file, 20, 10, 2006);
			attr_dev(button1, "class", "text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg");
			add_location(button1, file, 24, 10, 2475);
			attr_dev(div6, "class", "flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4");
			add_location(div6, file, 15, 8, 1388);
			attr_dev(div7, "class", "container px-6 py-10 mx-auto");
			add_location(div7, file, 14, 4, 1336);
			attr_dev(section, "class", "text-gray-400 bg-gray-900 body-font");
			add_location(section, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div3);
			append_dev(div3, div2);
			append_dev(div2, div0);
			append_dev(div0, label0);
			append_dev(label0, t0);
			append_dev(div0, t1);
			append_dev(div0, input0);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div1, label1);
			append_dev(label1, t3);
			append_dev(div1, t4);
			append_dev(div1, input1);
			append_dev(div2, t5);
			append_dev(div2, button0);
			append_dev(button0, t6);
			append_dev(section, t7);
			append_dev(section, div7);
			append_dev(div7, div6);
			append_dev(div6, div4);
			append_dev(div4, label2);
			append_dev(label2, t8);
			append_dev(div4, t9);
			append_dev(div4, input2);
			append_dev(div6, t10);
			append_dev(div6, div5);
			append_dev(div5, label3);
			append_dev(label3, t11);
			append_dev(div5, t12);
			append_dev(div5, input3);
			append_dev(div6, t13);
			append_dev(div6, button1);
			append_dev(button1, t14);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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
	validate_slots("Inputs", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Inputs> was created with unknown prop '${key}'`);
	});

	return [];
}

class Inputs extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Inputs",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src\routes\about.svelte generated by Svelte v3.38.2 */

function create_fragment(ctx) {
	let t0;
	let carrousel;
	let t1;
	let inputs;
	let t2;
	let price;
	let current;
	carrousel = new Carrousel({ $$inline: true });
	inputs = new Inputs({ $$inline: true });
	price = new Price({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(carrousel.$$.fragment);
			t1 = space();
			create_component(inputs.$$.fragment);
			t2 = space();
			create_component(price.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(carrousel.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(inputs.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(price.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(carrousel, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(inputs, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(price, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(carrousel.$$.fragment, local);
			transition_in(inputs.$$.fragment, local);
			transition_in(price.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(carrousel.$$.fragment, local);
			transition_out(inputs.$$.fragment, local);
			transition_out(price.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(carrousel, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(inputs, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(price, detaching);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("About", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Carrousel, Inputs, Price });
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMzE4MTdlYWYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
