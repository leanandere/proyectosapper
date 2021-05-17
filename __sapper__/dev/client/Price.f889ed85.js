import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, l as text, r as space, E as svg_element, a as claim_element, b as children, m as claim_text, f as detach_dev, w as claim_space, g as attr_dev, h as add_location, G as set_style, j as insert_dev, n as append_dev, p as noop } from './client.22fed28a.js';

/* src\components\Price.svelte generated by Svelte v3.38.2 */

const file = "src\\components\\Price.svelte";

function create_fragment(ctx) {
	let section;
	let div8;
	let div0;
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let div7;
	let div2;
	let h30;
	let t4;
	let t5;
	let div1;
	let p1;
	let t6;
	let t7;
	let p2;
	let t8;
	let t9;
	let p3;
	let t10;
	let t11;
	let ul0;
	let li0;
	let svg0;
	let path0;
	let t12;
	let t13;
	let li1;
	let svg1;
	let path1;
	let t14;
	let t15;
	let li2;
	let svg2;
	let path2;
	let t16;
	let t17;
	let button0;
	let t18;
	let t19;
	let div4;
	let h31;
	let t20;
	let t21;
	let div3;
	let p4;
	let t22;
	let t23;
	let p5;
	let t24;
	let t25;
	let p6;
	let t26;
	let t27;
	let ul1;
	let li3;
	let svg3;
	let path3;
	let t28;
	let t29;
	let li4;
	let svg4;
	let path4;
	let t30;
	let t31;
	let li5;
	let svg5;
	let path5;
	let t32;
	let t33;
	let li6;
	let svg6;
	let path6;
	let t34;
	let t35;
	let button1;
	let t36;
	let t37;
	let div6;
	let h32;
	let t38;
	let t39;
	let div5;
	let p7;
	let t40;
	let t41;
	let p8;
	let t42;
	let t43;
	let p9;
	let t44;
	let t45;
	let ul2;
	let li7;
	let svg7;
	let path7;
	let t46;
	let t47;
	let li8;
	let svg8;
	let path8;
	let t48;
	let t49;
	let li9;
	let svg9;
	let path9;
	let t50;
	let t51;
	let li10;
	let svg10;
	let path10;
	let t52;
	let t53;
	let button2;
	let t54;

	const block = {
		c: function create() {
			section = element("section");
			div8 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text("Hosting Baratito");
			t1 = space();
			p0 = element("p");
			t2 = text("El mejor hosting al mejor precio.");
			t3 = space();
			div7 = element("div");
			div2 = element("div");
			h30 = element("h3");
			t4 = text("Starter");
			t5 = space();
			div1 = element("div");
			p1 = element("p");
			t6 = text("$5");
			t7 = space();
			p2 = element("p");
			t8 = text("/ month");
			t9 = space();
			p3 = element("p");
			t10 = text("Ideal for Startups and Small Companies");
			t11 = space();
			ul0 = element("ul");
			li0 = element("li");
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t12 = text("\r\n                        Automated Reporting");
			t13 = space();
			li1 = element("li");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			t14 = text("\r\n                        Faster Processing");
			t15 = space();
			li2 = element("li");
			svg2 = svg_element("svg");
			path2 = svg_element("path");
			t16 = text("\r\n                        Customizations");
			t17 = space();
			button0 = element("button");
			t18 = text("Select Plan");
			t19 = space();
			div4 = element("div");
			h31 = element("h3");
			t20 = text("Basic");
			t21 = space();
			div3 = element("div");
			p4 = element("p");
			t22 = text("$15");
			t23 = space();
			p5 = element("p");
			t24 = text("/ month");
			t25 = space();
			p6 = element("p");
			t26 = text("Ideal for medium-size businesses to larger businesses");
			t27 = space();
			ul1 = element("ul");
			li3 = element("li");
			svg3 = svg_element("svg");
			path3 = svg_element("path");
			t28 = text("\r\n                        Everything in Starter");
			t29 = space();
			li4 = element("li");
			svg4 = svg_element("svg");
			path4 = svg_element("path");
			t30 = text("\r\n                        100 Builds");
			t31 = space();
			li5 = element("li");
			svg5 = svg_element("svg");
			path5 = svg_element("path");
			t32 = text("\r\n                        Progress Reports");
			t33 = space();
			li6 = element("li");
			svg6 = svg_element("svg");
			path6 = svg_element("path");
			t34 = text("\r\n                        Premium Support");
			t35 = space();
			button1 = element("button");
			t36 = text("Select Plan");
			t37 = space();
			div6 = element("div");
			h32 = element("h3");
			t38 = text("Plus");
			t39 = space();
			div5 = element("div");
			p7 = element("p");
			t40 = text("$25");
			t41 = space();
			p8 = element("p");
			t42 = text("/ month");
			t43 = space();
			p9 = element("p");
			t44 = text("Ideal for larger and enterprise companies");
			t45 = space();
			ul2 = element("ul");
			li7 = element("li");
			svg7 = svg_element("svg");
			path7 = svg_element("path");
			t46 = text("\r\n                        Everything in Basic");
			t47 = space();
			li8 = element("li");
			svg8 = svg_element("svg");
			path8 = svg_element("path");
			t48 = text("\r\n                        Unlimited Builds");
			t49 = space();
			li9 = element("li");
			svg9 = svg_element("svg");
			path9 = svg_element("path");
			t50 = text("\r\n                        Advanced Analytics");
			t51 = space();
			li10 = element("li");
			svg10 = svg_element("svg");
			path10 = svg_element("path");
			t52 = text("\r\n                        Company Evaluations");
			t53 = space();
			button2 = element("button");
			t54 = text("Select Plan");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div8 = claim_element(section_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div0 = claim_element(div8_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Hosting Baratito");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "El mejor hosting al mejor precio.");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div2 = claim_element(div7_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h30 = claim_element(div2_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t4 = claim_text(h30_nodes, "Starter");
			h30_nodes.forEach(detach_dev);
			t5 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "$5");
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", { class: true, style: true });
			var p2_nodes = children(p2);
			t8 = claim_text(p2_nodes, "/ month");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			p3 = claim_element(div2_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t10 = claim_text(p3_nodes, "Ideal for Startups and Small Companies");
			p3_nodes.forEach(detach_dev);
			t11 = claim_space(div2_nodes);
			ul0 = claim_element(div2_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);
			li0 = claim_element(ul0_nodes, "LI", { class: true });
			var li0_nodes = children(li0);

			svg0 = claim_element(
				li0_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg0_nodes = children(svg0);

			path0 = claim_element(
				svg0_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path0).forEach(detach_dev);
			svg0_nodes.forEach(detach_dev);
			t12 = claim_text(li0_nodes, "\r\n                        Automated Reporting");
			li0_nodes.forEach(detach_dev);
			t13 = claim_space(ul0_nodes);
			li1 = claim_element(ul0_nodes, "LI", { class: true });
			var li1_nodes = children(li1);

			svg1 = claim_element(
				li1_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg1_nodes = children(svg1);

			path1 = claim_element(
				svg1_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path1).forEach(detach_dev);
			svg1_nodes.forEach(detach_dev);
			t14 = claim_text(li1_nodes, "\r\n                        Faster Processing");
			li1_nodes.forEach(detach_dev);
			t15 = claim_space(ul0_nodes);
			li2 = claim_element(ul0_nodes, "LI", { class: true });
			var li2_nodes = children(li2);

			svg2 = claim_element(
				li2_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg2_nodes = children(svg2);

			path2 = claim_element(
				svg2_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path2).forEach(detach_dev);
			svg2_nodes.forEach(detach_dev);
			t16 = claim_text(li2_nodes, "\r\n                        Customizations");
			li2_nodes.forEach(detach_dev);
			ul0_nodes.forEach(detach_dev);
			t17 = claim_space(div2_nodes);
			button0 = claim_element(div2_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t18 = claim_text(button0_nodes, "Select Plan");
			button0_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t19 = claim_space(div7_nodes);
			div4 = claim_element(div7_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			h31 = claim_element(div4_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t20 = claim_text(h31_nodes, "Basic");
			h31_nodes.forEach(detach_dev);
			t21 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			p4 = claim_element(div3_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t22 = claim_text(p4_nodes, "$15");
			p4_nodes.forEach(detach_dev);
			t23 = claim_space(div3_nodes);
			p5 = claim_element(div3_nodes, "P", { class: true, style: true });
			var p5_nodes = children(p5);
			t24 = claim_text(p5_nodes, "/ month");
			p5_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t25 = claim_space(div4_nodes);
			p6 = claim_element(div4_nodes, "P", { class: true });
			var p6_nodes = children(p6);
			t26 = claim_text(p6_nodes, "Ideal for medium-size businesses to larger businesses");
			p6_nodes.forEach(detach_dev);
			t27 = claim_space(div4_nodes);
			ul1 = claim_element(div4_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);
			li3 = claim_element(ul1_nodes, "LI", { class: true });
			var li3_nodes = children(li3);

			svg3 = claim_element(
				li3_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg3_nodes = children(svg3);

			path3 = claim_element(
				svg3_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path3).forEach(detach_dev);
			svg3_nodes.forEach(detach_dev);
			t28 = claim_text(li3_nodes, "\r\n                        Everything in Starter");
			li3_nodes.forEach(detach_dev);
			t29 = claim_space(ul1_nodes);
			li4 = claim_element(ul1_nodes, "LI", { class: true });
			var li4_nodes = children(li4);

			svg4 = claim_element(
				li4_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg4_nodes = children(svg4);

			path4 = claim_element(
				svg4_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path4).forEach(detach_dev);
			svg4_nodes.forEach(detach_dev);
			t30 = claim_text(li4_nodes, "\r\n                        100 Builds");
			li4_nodes.forEach(detach_dev);
			t31 = claim_space(ul1_nodes);
			li5 = claim_element(ul1_nodes, "LI", { class: true });
			var li5_nodes = children(li5);

			svg5 = claim_element(
				li5_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg5_nodes = children(svg5);

			path5 = claim_element(
				svg5_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path5).forEach(detach_dev);
			svg5_nodes.forEach(detach_dev);
			t32 = claim_text(li5_nodes, "\r\n                        Progress Reports");
			li5_nodes.forEach(detach_dev);
			t33 = claim_space(ul1_nodes);
			li6 = claim_element(ul1_nodes, "LI", { class: true });
			var li6_nodes = children(li6);

			svg6 = claim_element(
				li6_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg6_nodes = children(svg6);

			path6 = claim_element(
				svg6_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path6).forEach(detach_dev);
			svg6_nodes.forEach(detach_dev);
			t34 = claim_text(li6_nodes, "\r\n                        Premium Support");
			li6_nodes.forEach(detach_dev);
			ul1_nodes.forEach(detach_dev);
			t35 = claim_space(div4_nodes);
			button1 = claim_element(div4_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t36 = claim_text(button1_nodes, "Select Plan");
			button1_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t37 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h32 = claim_element(div6_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t38 = claim_text(h32_nodes, "Plus");
			h32_nodes.forEach(detach_dev);
			t39 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p7 = claim_element(div5_nodes, "P", { class: true });
			var p7_nodes = children(p7);
			t40 = claim_text(p7_nodes, "$25");
			p7_nodes.forEach(detach_dev);
			t41 = claim_space(div5_nodes);
			p8 = claim_element(div5_nodes, "P", { class: true, style: true });
			var p8_nodes = children(p8);
			t42 = claim_text(p8_nodes, "/ month");
			p8_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t43 = claim_space(div6_nodes);
			p9 = claim_element(div6_nodes, "P", { class: true });
			var p9_nodes = children(p9);
			t44 = claim_text(p9_nodes, "Ideal for larger and enterprise companies");
			p9_nodes.forEach(detach_dev);
			t45 = claim_space(div6_nodes);
			ul2 = claim_element(div6_nodes, "UL", { class: true });
			var ul2_nodes = children(ul2);
			li7 = claim_element(ul2_nodes, "LI", { class: true });
			var li7_nodes = children(li7);

			svg7 = claim_element(
				li7_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg7_nodes = children(svg7);

			path7 = claim_element(
				svg7_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path7).forEach(detach_dev);
			svg7_nodes.forEach(detach_dev);
			t46 = claim_text(li7_nodes, "\r\n                        Everything in Basic");
			li7_nodes.forEach(detach_dev);
			t47 = claim_space(ul2_nodes);
			li8 = claim_element(ul2_nodes, "LI", { class: true });
			var li8_nodes = children(li8);

			svg8 = claim_element(
				li8_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg8_nodes = children(svg8);

			path8 = claim_element(
				svg8_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path8).forEach(detach_dev);
			svg8_nodes.forEach(detach_dev);
			t48 = claim_text(li8_nodes, "\r\n                        Unlimited Builds");
			li8_nodes.forEach(detach_dev);
			t49 = claim_space(ul2_nodes);
			li9 = claim_element(ul2_nodes, "LI", { class: true });
			var li9_nodes = children(li9);

			svg9 = claim_element(
				li9_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg9_nodes = children(svg9);

			path9 = claim_element(
				svg9_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path9).forEach(detach_dev);
			svg9_nodes.forEach(detach_dev);
			t50 = claim_text(li9_nodes, "\r\n                        Advanced Analytics");
			li9_nodes.forEach(detach_dev);
			t51 = claim_space(ul2_nodes);
			li10 = claim_element(ul2_nodes, "LI", { class: true });
			var li10_nodes = children(li10);

			svg10 = claim_element(
				li10_nodes,
				"svg",
				{
					class: true,
					fill: true,
					stroke: true,
					viewBox: true,
					xmlns: true
				},
				1
			);

			var svg10_nodes = children(svg10);

			path10 = claim_element(
				svg10_nodes,
				"path",
				{
					"stroke-linecap": true,
					"stroke-linejoin": true,
					"stroke-width": true,
					d: true
				},
				1
			);

			children(path10).forEach(detach_dev);
			svg10_nodes.forEach(detach_dev);
			t52 = claim_text(li10_nodes, "\r\n                        Company Evaluations");
			li10_nodes.forEach(detach_dev);
			ul2_nodes.forEach(detach_dev);
			t53 = claim_space(div6_nodes);
			button2 = claim_element(div6_nodes, "BUTTON", { class: true });
			var button2_nodes = children(button2);
			t54 = claim_text(button2_nodes, "Select Plan");
			button2_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl");
			add_location(h2, file, 5, 12, 319);
			attr_dev(p0, "class", "box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl");
			add_location(p0, file, 6, 12, 481);
			attr_dev(div0, "class", "flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200");
			add_location(div0, file, 4, 8, 204);
			attr_dev(h30, "class", "m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl");
			add_location(h30, file, 11, 16, 969);
			attr_dev(p1, "class", "box-border m-0 text-6xl font-semibold leading-none border-solid");
			add_location(p1, file, 15, 20, 1271);
			attr_dev(p2, "class", "box-border m-0 border-solid");
			set_style(p2, "border-image", "initial");
			add_location(p2, file, 18, 20, 1422);
			attr_dev(div1, "class", "flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200");
			add_location(div1, file, 14, 16, 1167);
			attr_dev(p3, "class", "mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200");
			add_location(p3, file, 22, 16, 1593);
			attr_dev(path0, "stroke-linecap", "round");
			attr_dev(path0, "stroke-linejoin", "round");
			attr_dev(path0, "stroke-width", "2");
			attr_dev(path0, "d", "M5 13l4 4L19 7");
			add_location(path0, file, 28, 28, 2220);
			attr_dev(svg0, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg0, "fill", "none");
			attr_dev(svg0, "stroke", "currentColor");
			attr_dev(svg0, "viewBox", "0 0 24 24");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg0, file, 27, 24, 2010);
			attr_dev(li0, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li0, file, 26, 20, 1892);
			attr_dev(path1, "stroke-linecap", "round");
			attr_dev(path1, "stroke-linejoin", "round");
			attr_dev(path1, "stroke-width", "2");
			attr_dev(path1, "d", "M5 13l4 4L19 7");
			add_location(path1, file, 34, 28, 2770);
			attr_dev(svg1, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg1, "fill", "none");
			attr_dev(svg1, "stroke", "currentColor");
			attr_dev(svg1, "viewBox", "0 0 24 24");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg1, file, 33, 24, 2560);
			attr_dev(li1, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li1, file, 32, 20, 2442);
			attr_dev(path2, "stroke-linecap", "round");
			attr_dev(path2, "stroke-linejoin", "round");
			attr_dev(path2, "stroke-width", "2");
			attr_dev(path2, "d", "M5 13l4 4L19 7");
			add_location(path2, file, 40, 28, 3318);
			attr_dev(svg2, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg2, "fill", "none");
			attr_dev(svg2, "stroke", "currentColor");
			attr_dev(svg2, "viewBox", "0 0 24 24");
			attr_dev(svg2, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg2, file, 39, 24, 3108);
			attr_dev(li2, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li2, file, 38, 20, 2990);
			attr_dev(ul0, "class", "flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200");
			add_location(ul0, file, 25, 16, 1788);
			attr_dev(button0, "class", "inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-red-600 no-underline bg-transparent border border-red-600 rounded-md cursor-pointer hover:bg-red-700 hover:border-red-700 hover:text-white focus-within:bg-red-700 focus-within:border-red-700 focus-within:text-white sm:text-base md:text-lg");
			add_location(button0, file, 45, 16, 3554);
			attr_dev(div2, "class", "relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8");
			add_location(div2, file, 10, 12, 801);
			attr_dev(h31, "class", "m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl");
			add_location(h31, file, 51, 16, 4209);
			attr_dev(p4, "class", "box-border m-0 text-6xl font-semibold leading-none border-solid");
			add_location(p4, file, 55, 20, 4509);
			attr_dev(p5, "class", "box-border m-0 border-solid");
			set_style(p5, "border-image", "initial");
			add_location(p5, file, 58, 20, 4661);
			attr_dev(div3, "class", "flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200");
			add_location(div3, file, 54, 16, 4405);
			attr_dev(p6, "class", "mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200");
			add_location(p6, file, 62, 16, 4832);
			attr_dev(path3, "stroke-linecap", "round");
			attr_dev(path3, "stroke-linejoin", "round");
			attr_dev(path3, "stroke-width", "2");
			attr_dev(path3, "d", "M5 13l4 4L19 7");
			add_location(path3, file, 68, 28, 5469);
			attr_dev(svg3, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg3, "fill", "none");
			attr_dev(svg3, "stroke", "currentColor");
			attr_dev(svg3, "viewBox", "0 0 24 24");
			attr_dev(svg3, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg3, file, 67, 24, 5259);
			attr_dev(li3, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li3, file, 66, 20, 5141);
			attr_dev(path4, "stroke-linecap", "round");
			attr_dev(path4, "stroke-linejoin", "round");
			attr_dev(path4, "stroke-width", "2");
			attr_dev(path4, "d", "M5 13l4 4L19 7");
			add_location(path4, file, 74, 28, 6021);
			attr_dev(svg4, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg4, "fill", "none");
			attr_dev(svg4, "stroke", "currentColor");
			attr_dev(svg4, "viewBox", "0 0 24 24");
			attr_dev(svg4, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg4, file, 73, 24, 5811);
			attr_dev(li4, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li4, file, 72, 20, 5693);
			attr_dev(path5, "stroke-linecap", "round");
			attr_dev(path5, "stroke-linejoin", "round");
			attr_dev(path5, "stroke-width", "2");
			attr_dev(path5, "d", "M5 13l4 4L19 7");
			add_location(path5, file, 80, 28, 6562);
			attr_dev(svg5, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg5, "fill", "none");
			attr_dev(svg5, "stroke", "currentColor");
			attr_dev(svg5, "viewBox", "0 0 24 24");
			attr_dev(svg5, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg5, file, 79, 24, 6352);
			attr_dev(li5, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li5, file, 78, 20, 6234);
			attr_dev(path6, "stroke-linecap", "round");
			attr_dev(path6, "stroke-linejoin", "round");
			attr_dev(path6, "stroke-width", "2");
			attr_dev(path6, "d", "M5 13l4 4L19 7");
			add_location(path6, file, 86, 28, 7109);
			attr_dev(svg6, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg6, "fill", "none");
			attr_dev(svg6, "stroke", "currentColor");
			attr_dev(svg6, "viewBox", "0 0 24 24");
			attr_dev(svg6, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg6, file, 85, 24, 6899);
			attr_dev(li6, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li6, file, 84, 20, 6781);
			attr_dev(ul1, "class", "flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200");
			add_location(ul1, file, 65, 16, 5042);
			attr_dev(button1, "class", "inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-red-600 border rounded-md cursor-pointer hover:bg-red-700 hover:border-red-700 hover:text-white focus-within:bg-red-700 focus-within:border-red-700 focus-within:text-white sm:text-base md:text-lg");
			add_location(button1, file, 91, 16, 7346);
			attr_dev(div4, "class", "relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-red-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16");
			add_location(div4, file, 50, 12, 4030);
			attr_dev(h32, "class", "m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl");
			add_location(h32, file, 97, 16, 7969);
			attr_dev(p7, "class", "box-border m-0 text-6xl font-semibold leading-none border-solid");
			add_location(p7, file, 101, 20, 8268);
			attr_dev(p8, "class", "box-border m-0 border-solid");
			set_style(p8, "border-image", "initial");
			add_location(p8, file, 104, 20, 8420);
			attr_dev(div5, "class", "flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200");
			add_location(div5, file, 100, 16, 8164);
			attr_dev(p9, "class", "mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200");
			add_location(p9, file, 108, 16, 8591);
			attr_dev(path7, "stroke-linecap", "round");
			attr_dev(path7, "stroke-linejoin", "round");
			attr_dev(path7, "stroke-width", "2");
			attr_dev(path7, "d", "M5 13l4 4L19 7");
			add_location(path7, file, 114, 28, 9216);
			attr_dev(svg7, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg7, "fill", "none");
			attr_dev(svg7, "stroke", "currentColor");
			attr_dev(svg7, "viewBox", "0 0 24 24");
			attr_dev(svg7, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg7, file, 113, 24, 9006);
			attr_dev(li7, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li7, file, 112, 20, 8888);
			attr_dev(path8, "stroke-linecap", "round");
			attr_dev(path8, "stroke-linejoin", "round");
			attr_dev(path8, "stroke-width", "2");
			attr_dev(path8, "d", "M5 13l4 4L19 7");
			add_location(path8, file, 120, 28, 9766);
			attr_dev(svg8, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg8, "fill", "none");
			attr_dev(svg8, "stroke", "currentColor");
			attr_dev(svg8, "viewBox", "0 0 24 24");
			attr_dev(svg8, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg8, file, 119, 24, 9556);
			attr_dev(li8, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li8, file, 118, 20, 9438);
			attr_dev(path9, "stroke-linecap", "round");
			attr_dev(path9, "stroke-linejoin", "round");
			attr_dev(path9, "stroke-width", "2");
			attr_dev(path9, "d", "M5 13l4 4L19 7");
			add_location(path9, file, 126, 28, 10313);
			attr_dev(svg9, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg9, "fill", "none");
			attr_dev(svg9, "stroke", "currentColor");
			attr_dev(svg9, "viewBox", "0 0 24 24");
			attr_dev(svg9, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg9, file, 125, 24, 10103);
			attr_dev(li9, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li9, file, 124, 20, 9985);
			attr_dev(path10, "stroke-linecap", "round");
			attr_dev(path10, "stroke-linejoin", "round");
			attr_dev(path10, "stroke-width", "2");
			attr_dev(path10, "d", "M5 13l4 4L19 7");
			add_location(path10, file, 132, 28, 10862);
			attr_dev(svg10, "class", "w-5 h-5 mr-2 font-semibold leading-7 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6");
			attr_dev(svg10, "fill", "none");
			attr_dev(svg10, "stroke", "currentColor");
			attr_dev(svg10, "viewBox", "0 0 24 24");
			attr_dev(svg10, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg10, file, 131, 24, 10652);
			attr_dev(li10, "class", "inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid");
			add_location(li10, file, 130, 20, 10534);
			attr_dev(ul2, "class", "flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200");
			add_location(ul2, file, 111, 16, 8789);
			attr_dev(button2, "class", "inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-red-600 no-underline bg-transparent border border-red-600 rounded-md cursor-pointer hover:bg-red-700 hover:border-red-700 hover:text-white focus-within:bg-red-700 focus-within:border-red-700 focus-within:text-white sm:text-base md:text-lg");
			add_location(button2, file, 137, 16, 11103);
			attr_dev(div6, "class", "relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8");
			add_location(div6, file, 96, 12, 7801);
			attr_dev(div7, "class", "grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3");
			add_location(div7, file, 8, 8, 618);
			attr_dev(div8, "class", "box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl");
			add_location(div8, file, 3, 4, 110);
			attr_dev(section, "class", "py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24");
			add_location(section, file, 2, 0, 22);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div8);
			append_dev(div8, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div0, t1);
			append_dev(div0, p0);
			append_dev(p0, t2);
			append_dev(div8, t3);
			append_dev(div8, div7);
			append_dev(div7, div2);
			append_dev(div2, h30);
			append_dev(h30, t4);
			append_dev(div2, t5);
			append_dev(div2, div1);
			append_dev(div1, p1);
			append_dev(p1, t6);
			append_dev(div1, t7);
			append_dev(div1, p2);
			append_dev(p2, t8);
			append_dev(div2, t9);
			append_dev(div2, p3);
			append_dev(p3, t10);
			append_dev(div2, t11);
			append_dev(div2, ul0);
			append_dev(ul0, li0);
			append_dev(li0, svg0);
			append_dev(svg0, path0);
			append_dev(li0, t12);
			append_dev(ul0, t13);
			append_dev(ul0, li1);
			append_dev(li1, svg1);
			append_dev(svg1, path1);
			append_dev(li1, t14);
			append_dev(ul0, t15);
			append_dev(ul0, li2);
			append_dev(li2, svg2);
			append_dev(svg2, path2);
			append_dev(li2, t16);
			append_dev(div2, t17);
			append_dev(div2, button0);
			append_dev(button0, t18);
			append_dev(div7, t19);
			append_dev(div7, div4);
			append_dev(div4, h31);
			append_dev(h31, t20);
			append_dev(div4, t21);
			append_dev(div4, div3);
			append_dev(div3, p4);
			append_dev(p4, t22);
			append_dev(div3, t23);
			append_dev(div3, p5);
			append_dev(p5, t24);
			append_dev(div4, t25);
			append_dev(div4, p6);
			append_dev(p6, t26);
			append_dev(div4, t27);
			append_dev(div4, ul1);
			append_dev(ul1, li3);
			append_dev(li3, svg3);
			append_dev(svg3, path3);
			append_dev(li3, t28);
			append_dev(ul1, t29);
			append_dev(ul1, li4);
			append_dev(li4, svg4);
			append_dev(svg4, path4);
			append_dev(li4, t30);
			append_dev(ul1, t31);
			append_dev(ul1, li5);
			append_dev(li5, svg5);
			append_dev(svg5, path5);
			append_dev(li5, t32);
			append_dev(ul1, t33);
			append_dev(ul1, li6);
			append_dev(li6, svg6);
			append_dev(svg6, path6);
			append_dev(li6, t34);
			append_dev(div4, t35);
			append_dev(div4, button1);
			append_dev(button1, t36);
			append_dev(div7, t37);
			append_dev(div7, div6);
			append_dev(div6, h32);
			append_dev(h32, t38);
			append_dev(div6, t39);
			append_dev(div6, div5);
			append_dev(div5, p7);
			append_dev(p7, t40);
			append_dev(div5, t41);
			append_dev(div5, p8);
			append_dev(p8, t42);
			append_dev(div6, t43);
			append_dev(div6, p9);
			append_dev(p9, t44);
			append_dev(div6, t45);
			append_dev(div6, ul2);
			append_dev(ul2, li7);
			append_dev(li7, svg7);
			append_dev(svg7, path7);
			append_dev(li7, t46);
			append_dev(ul2, t47);
			append_dev(ul2, li8);
			append_dev(li8, svg8);
			append_dev(svg8, path8);
			append_dev(li8, t48);
			append_dev(ul2, t49);
			append_dev(ul2, li9);
			append_dev(li9, svg9);
			append_dev(svg9, path9);
			append_dev(li9, t50);
			append_dev(ul2, t51);
			append_dev(ul2, li10);
			append_dev(li10, svg10);
			append_dev(svg10, path10);
			append_dev(li10, t52);
			append_dev(div6, t53);
			append_dev(div6, button2);
			append_dev(button2, t54);
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Price", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Price> was created with unknown prop '${key}'`);
	});

	return [];
}

class Price extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Price",
			options,
			id: create_fragment.name
		});
	}
}

export { Price as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2UuZjg4OWVkODUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
