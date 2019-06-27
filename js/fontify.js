// fontify.js

function ftyi(name, imgher, cas) {
	var lcFs = [
		{
			l: 'a',
			f: 'ouli\\ao.svg',
			fs: 'shdw\\as.svg',
			fse: 'shex\\ase.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.99 57" class="lettersv"><title>asvg</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,56.84H6.58A6.25,6.25,0,0,0,12,53.1l2.5-6.59a6.25,6.25,0,0,1,5.42-3.74H28"/><path d="M25.45,0,41.82,53.18A2.79,2.79,0,0,1,39,57H34.32"/><path d="M17.89,32.11l2.5-6.59c.78-2.06,2.24-3.74,3.24-3.74h1.82"/></g></g></svg>'
		},
		{
			l: 'b',
			f: 'ouli\\bo.svg',
			fs: 'shdw\\bs.svg',
			fse: 'shex\\bse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 50.48" class="lettersv"><title>bfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,50.46H4.71c2.2,0,4.88,0,6,0l1,0c4.12-.11,10.23-.26,14.89-2.45a17.25,17.25,0,0,0,8.93-10.8"/><path d="M24.51,17.46A12.18,12.18,0,0,0,33,13.73c2.21-2.4,2.5-4.57,2.5-9.52"/><path d="M11.81,10.84V4c0-2.2.89-4,2-4L15.2,0c3-.1,4-.06,5.61,1.42,1.18,1.09,1,2.82,1,3.46"/><path d="M11.81,35.44v-6.8c0-2.2.89-4,2-4l1.42,0c3-.1,4-.06,5.61,1.42,1.18,1.09,1,2.82,1,3.46"/></g></g></svg>'
		},
		{
			l: 'c',
			f: 'ouli\\co.svg',
			fs: 'shdw\\cs.svg',
			fse: 'shex\\cse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.45 57.03" class="lettersv"><title>cfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M9.79,42.46"/><path d="M30.45,0V6.56a4,4,0,0,1-4,4H25.09c-2.2,0-4.57,0-5.27-.05l-.84.05C9.54,11.13,2.38,19.8,1.94,29c-.36,7.56,5.67,12.45,7.85,13.46"/><path d="M30.45,44.42V53a4,4,0,0,1-4,4h-.13c-2.2,0-4.87,0-5.94.06L18.8,57C15.62,56.84,5.65,56.8,0,52.48"/><path d="M27.41,42.46"/></g></g></svg>'
		},
		{
			l: 'd',
			f: 'ouli\\do.svg',
			fs: 'shdw\\ds.svg',
		  fse: 'shex\\dse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.71 51.55" class="lettersv"><title>dfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M7.59,37.8V4.07c0-2.2.75-4,1.67-4S11.6,0,12.4,0l.66.07c6.78.69,8.36,7.56,9.35,9.41"/><path d="M0,51.53H8.58l6.91,0,.76-.06c9.23-.7,15.35-12,17.46-22.27"/></g></g></svg>'
		},
		{
			l: 'e',
			f: 'ouli\\eo.svg',
			fs: 'shdw\\es.svg',
			fse: 'shex\\ese.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.42 57" class="lettersv"><title>efi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M34.42,0V7.83a4,4,0,0,1-4,4h-9.5a4,4,0,0,0-4,4v7.83"/><path d="M34.42,21.51v7.83a4,4,0,0,1-4,4h-9.5a4,4,0,0,0-4,4v7.83"/><path d="M34.42,45.17V53a4,4,0,0,1-4,4H0"/></g></g></svg>'
		},
		{
			l: 'f',
			f: 'ouli\\fo.svg',
			fs: 'shdw\\fs.svg',
			fse: 'shex\\fse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.48 57" class="lettersv"><title>ffi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M35.48,0V7.44a4,4,0,0,1-4,4H14.54a4,4,0,0,0-4,4v7.44"/><path d="M35.48,20.79v7.44a4,4,0,0,1-4,4H14.54a4,4,0,0,0-4,4V53a4,4,0,0,1-4,4H0"/></g></g></svg>'
		},
		{
			l: 'g',
			f: 'ouli\\go.svg',
			fs: 'shdw\\gs.svg',
			fse: 'shex\\gse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.29 57.03" class="lettersv"><title>gfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M10.06,42.46"/><path d="M31.29,0V6.56a4,4,0,0,1-4,4H25.67c-2.2,0-4.59,0-5.31-.05l-.87.05C9.81,11.13,2.45,19.8,2,29c-.37,7.56,5.83,12.45,8.07,13.46"/><path d="M0,52.48C5.81,56.8,16.05,56.84,19.32,57l1.63.06c1.1,0,3.79-.06,6-.06h.35a4,4,0,0,0,4-4V30.52"/></g></g></svg>'
		},
		{
			l: 'h',
			f: 'ouli\\ho.svg',
			fs: 'shdw\\hs.svg',
			fse: 'shex\\hse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.95 57" class="lettersv"><title>hfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M40,0V53a4,4,0,0,1-4,4H28"/><path d="M28,33.72H16.7a4,4,0,0,0-4,4V53a4,4,0,0,1-4,4H0"/><line x1="12.7" y1="23.72" x2="12.7"/><line x1="12.73" x2="12.73" y2="23.72"/><path d="M12.7,0c2.5,0,3.37,5.12,3.37,11.86,0,5.87-.64,11.86-3.34,11.86"/></g></g></svg>'
		},
		{
			l: 'i',
			f: 'ouli\\io.svg',
			fs: 'shdw\\is.svg',
			fse: 'shex\\ise.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.39 57" class="lettersv"><title>ifi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M31.63,8.29"/><path d="M34.39,44v9a4,4,0,0,1-4,4H0"/><path d="M34.39,0V7a4,4,0,0,1-4,4H26.34a4,4,0,0,0-4,4V44"/><line x1="12.59" y1="10.81" y2="10.81"/><line x1="12.56" y1="10.84" y2="10.84"/><path d="M12.56,10.81c0,2.53-2.71,3.42-6.28,3.42-3.11,0-6.28-.65-6.28-3.4"/></g></g></svg>'
		},
		{
			l: 'j',
			f: 'ouli\\jo.svg',
			fs: 'shdw\\js.svg',
			fse: 'shex\\jse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.55 56.98" class="lettersv"><title>jfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,0V6.4a4,4,0,0,0,4,4H9.89a4,4,0,0,1,4,4V26.62c0,2.2,0,4.88,0,5.94v1c-.11,8.54,0,11.8-1.51,12.88"/><line x1="25.28" y1="10.07" x2="34.55" y2="10.07"/><path d="M0,42.08s0,3.27,0,4.36a9.61,9.61,0,0,0,4.2,8.32c4.09,2.71,11.81,3.08,19,.32"/><line x1="23.24" y1="10.09" x2="34.55" y2="10.09"/><path d="M23.24,10.07c0,2.32,2.44,3.14,5.65,3.14,2.8,0,5.65-.6,5.65-3.11"/></g></g></svg>'
		},
		{
			l: 'k',
			f: 'ouli\\ko.svg',
			fs: 'shdw\\ks.svg',
		  fse: 'shex\\kse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 57" class="lettersv"><title>kfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,57H10.81a4,4,0,0,0,4-4V32"/><path d="M25.9,57H37a2.46,2.46,0,0,0,2.44-3.68L30.26,31.6a10.64,10.64,0,0,1,.05-7.34L41,0"/><line x1="14.81" y1="20.63" x2="14.81"/><line x1="14.96" y1="20.63" x2="14.96" y2="0.27"/><path d="M14.94,20.63c2.32,0,3.14-4.4,3.14-10.18,0-5-.6-10.18-3.11-10.18"/></g></g></svg>'
		},
		{
			l: 'l',
			f: 'ouli\\lo.svg',
			fs: 'shdw\\ls.svg',
			fse: 'shex\\lse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 57" class="lettersv"><title>kfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,57H10.81a4,4,0,0,0,4-4V32"/><path d="M25.9,57H37a2.46,2.46,0,0,0,2.44-3.68L30.26,31.6a10.64,10.64,0,0,1,.05-7.34L41,0"/><line x1="14.81" y1="20.63" x2="14.81"/><line x1="14.96" y1="20.63" x2="14.96" y2="0.27"/><path d="M14.94,20.63c2.32,0,3.14-4.4,3.14-10.18,0-5-.6-10.18-3.11-10.18"/></g></g></svg>'
		},
		{
			l: 'm',
			f: 'ouli\\mo.svg',
			fs: 'shdw\\ms.svg',
			fse: 'shex\\mse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 57" class="lettersv"><title>mfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,57H6.28a4,4,0,0,0,4-4V26.71"/><path d="M44.69,57H51a4,4,0,0,0,4-4V0"/><path d="M21.83,28.33c1.49,1.62,1.92,1.33,1-.65L11.72,4.74c-1-2-1.14-1.91-.4.17L16.9,20.64a23.54,23.54,0,0,0,4,6.72Z"/><path d="M39.67,24.21c1.56-1.55,2-1.23.93.7l-12,22c-1.05,1.93-1.23,1.85-.39-.19l6.23-15.17a23.53,23.53,0,0,1,4.36-6.51Z"/></g></g></svg>'
		},
		{
			l: 'n',
			f: 'ouli\\no.svg',
			fs: 'shdw\\ns.svg',
			fse: 'shex\\nse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.64 57" class="lettersv"><title>nfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M22.89,31.13c1.42,1.68,1.85,1.41,1-.6L12.57,5.31c-.9-2-1.07-1.94-.38.15L17.94,23a24.47,24.47,0,0,0,3.84,6.85Z"/><path d="M19.45,5.29a1.68,1.68,0,0,1,.12.21s-.08.08-.1.07a1.3,1.3,0,0,1-.21-.13Z"/><path d="M0,57H5.44a4,4,0,0,0,4-4V21.41"/><path d="M28.63,56.33h8a4,4,0,0,0,4-4V0"/></g></g></svg>'
		},
		{
			l: 'o',
			f: 'ouli\\oo.svg',
			fs: 'shdw\\os.svg',
			fse: 'shex\\ose.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.55 57" class="lettersv"><title>ofi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M15.84,12.8a24.59,24.59,0,0,0-6.05.42C4.35,14.69,0,19.58,0,27.8S3.07,41,8.29,43.25c3,1.29,7.56.89,7.56.89"/><path d="M12,57c6,0,6.57-.17,8.76-.76,9.88-2.66,17.78-11.54,17.78-26.47s-5.57-24-15-28A20.94,20.94,0,0,0,13.19.11"/></g></g></svg>'
		},
		{
			l: 'p',
			f: 'ouli\\po.svg',
			fs: 'shdw\\ps.svg',
			fse: 'shex\\pse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 53.5" class="lettersv"><title>pfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,53.5H6.32a4,4,0,0,0,4-4v-21c0-2.2,1.07-4,2.38-3.9l1.6-.1a30.35,30.35,0,0,0,7.31-1.29c1.51-.48,5.79-1.86,8.51-4.8,5.55-6,5.3-16.16,5-17"/><path d="M9.81,10.84V4c0-2.2.89-4,2-4L13.2,0c3-.1,4-.06,5.61,1.42,1.18,1.09,1,2.82,1,3.46"/></g></g></svg>'
		},
		{
			l: 'q',
			f: 'ouli\\qo.svg',
			fs: 'shdw\\qs.svg',
			fse: 'shex\\qse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.73 57" class="lettersv"><title>qfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M15.91,12.77a24.86,24.86,0,0,0-6.08.42C4.37,14.65,0,19.54,0,27.74S3.08,40.93,8.32,43.15c3,1.29,7.59.89,7.59.89"/><path d="M31.39,50c4.46-4.56,7.34-11.34,7.34-20.32,0-14.76-5.6-23.94-15.11-28A21.16,21.16,0,0,0,13.25.11"/><path d="M31.39,50"/><path d="M30.65,50.74"/><path d="M31.39,50l2.32,3.6c1.19,1.85.37,3.37-1.83,3.37H26"/></g></g></svg>'
		},
		{
			l: 'r',
			f: 'ouli\\ro.svg',
			fs: 'shdw\\rs.svg',
			fse: 'shex\\rse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.06 49.82" class="lettersv"><title>rfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,49.82H9.79a4,4,0,0,0,4-4V25.56"/><path d="M24.78,49.82h9.79A2.71,2.71,0,0,0,37.3,46L31.18,27.77c-.7-2.09-.59-4.16.24-4.61a7.16,7.16,0,0,0,2-1.59l.35-.3C38.66,17.06,39.46,8.74,35.71,0"/><path d="M13.76,10.86V4.06c0-2.2.89-4,2-4l1.42,0c3-.1,4-.06,5.61,1.42,1.18,1.09,1,2.82,1,3.46"/></g></g></svg>'
		},
		{
			l: 's',
			f: 'ouli\\so.svg',
			fs: 'shdw\\ss.svg',
			fse: 'shex\\sse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.91 56" class="lettersv"><title>sfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M31.71,0s-.43,7.93-2.34,9.07c-.79.48-5.86-1.53-5.86-1.53a25.16,25.16,0,0,0-7.72-1.47H14.2A9.83,9.83,0,0,0,7.89,8.54a9.28,9.28,0,0,0-2.27,5.55,15.47,15.47,0,0,0,.91,5L7.41,21"/><path d="M2.3,30c1.09,1.45,2.77,5.75,8,7.47,4.79,1.56,10.2,0,11.9-.46"/><path d="M0,53.33c.67.43,12.55,5.71,22.89.13,7.55-4.07,10.31-11.85,10-21.24,0,0-9.65,11.61-13.91,14.44C14.39,49.7,0,53.33,0,53.33Z"/></g></g></svg>'
		},
		{
			l: 't',
			f: 'ouli\\to.svg',
			fs: 'shdw\\ts.svg',
			fse: 'shex\\tse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.52 57" class="lettersv"><title>tfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M45.52,0V7a4,4,0,0,1-4,4H33.78a4,4,0,0,0-4,4V53a4,4,0,0,1-4,4H17"/><line x1="16.44" y1="10.81" x2="0.6" y2="10.81"/><line x1="16.44" y1="10.81" y2="10.81"/><line x1="16.41" y1="10.85" y2="10.85"/><path d="M16.41,10.81c0,3-3.55,4.09-8.21,4.09C4.14,14.9,0,14.12,0,10.85"/></g></g></svg>'
		},
		{
			l: 'u',
			f: 'ouli\\uo.svg',
			fs: 'shdw\\us.svg',
			fse: 'shex\\use.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.31 57" class="lettersv"><title>ufi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M32,.68H42.31a4,4,0,0,1,4,4V57"/><path d="M0,0H10.27a4,4,0,0,1,4,4V38.33a4,4,0,0,0,4,4H32"/></g></g></svg>'
		},
		{
			l: 'v',
			f: 'ouli\\vo.svg',
			fs: 'shdw\\vs.svg',
			fse: 'shex\\vse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.48 57" class="lettersv"><title>vfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,.13H4.11A6.83,6.83,0,0,1,9.78,3.76L22.61,31.53"/><path d="M25.74,57,48.19,3.69A2.47,2.47,0,0,0,45.74,0H39.79"/></g></g></svg>'
		},
		{
			l: 'w',
			f: 'ouli\\wo.svg',
			fs: 'shdw\\ws.svg',
			fse: 'shex\\wse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.76 57" class="lettersv"><defs><style>.cls-1{fill:none;stroke:#ffbf3d;stroke-miterlimit:10;}</style></defs><title>wfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M29.08,33.65c1.48-1.65,1.37.35-.26,4.44L24.27,49.56c-1.62,4.09-2.08,3.94-1-.33l1.2-4.83C25.52,40.14,27.6,35.3,29.08,33.65Z"/><path d="M41.6,36.91c1.44,1.81,1.25,0-.42-4.11L35.56,19.11c-1.67-4.07-2-3.95-.78.27l1.94,6.57C38,30.17,40.16,35.1,41.6,36.91Z"/><path d="M39.72,29.71l-.45,1.13C39,30.05,39,30.05,39.72,29.71Z"/><path d="M0,0H3.46C5.36,0,7.9,2.51,9.11,5.58L19.28,31.4"/><path d="M32.7,32.17"/><path class="cls-1" d="M32.7,32.17"/><path d="M45.68,57,65.28,5.61C66.46,2.52,65.39,0,62.91,0H58.41"/></g></g></svg>'
		},
		{
			l: 'x',
			f: 'ouli\\xo.svg',
			fs: 'shdw\\xs.svg',
			fse: 'shex\\xse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.51 57" class="lettersv"><title>xfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M38.21,0h9c2.2,0,3,1.46,1.67,3.25L32.29,26.42A6.37,6.37,0,0,0,32.12,33l15.4,24"/><path d="M24.35,21.49,12.52,3.55A8.54,8.54,0,0,0,6.32.13L0,0"/><path d="M20.14,39.79c1.86-1.2,1.22.7-1.42,4.22l-7.41,9.86c-2.64,3.52-3,3.25-.9-.58l2.43-4.34C15,45.11,18.28,41,20.14,39.79Z"/></g></g></svg>'
		},
		{
			l: 'y',
			f: 'ouli\\yo.svg',
			fs: 'shdw\\ys.svg',
			fse: 'shex\\yse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.55 57" class="lettersv"><title>yfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,0H9.36a6.9,6.9,0,0,1,5.71,3.62L23.76,22"/><path d="M34.15,0H45c2.2,0,3.16,1.59,2.14,3.54L36,24.8a19.33,19.33,0,0,0-1.86,7.54V53a4,4,0,0,1-4,4H27.76a2.63,2.63,0,0,1-2.64-3.76l9-24.9"/></g></g></svg>'
		},
		{
			l: 'z',
			f: 'ouli\\zo.svg',
			fs: 'shdw\\zs.svg',
			fse: 'shex\\zse.svg',
			sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.34 56.97" class="lettersv"><title>zfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,10.26V4A4,4,0,0,1,4,0L48.34.29"/><path d="M36.78,10.38,3.16,36.44A9.25,9.25,0,0,0,0,42.89V57"/><path d="M16.25,47.25c-2.71.81-1.33,1.48,3.07,1.48h21c4.4,0,4.42-.39,0-.87L29.14,46.64C24.77,46.16,19,46.43,16.25,47.25Z"/></g></g></svg>'
		},
	];

	var aca = $(imgher)[0];
	while (aca.firstChild) {													// clear letters that exist within div
		aca.removeChild(aca.firstChild);
	}
	var name = document.getElementById(name).value.toLowerCase();		// get name from input
	var i = 0;
	while (i < name.length) {													// while i is less than input length
		var j = 0;
		for (j=0; j<lcFs.length; j++) {									// loop through lcFs array of objects
			if (lcFs[j].l === name[i]) {									// if the letter of the object matches the letter in the input name
				var n = parseInt(cas);											// parse the case number
				switch (n) {
					case n = 1:																// if user selects first 'generate' display typ 1 font
						var aca = $(imgher)[0];
						aca.innerHTML += '<img src="img\\lcf\\' + lcFs[j].f + '" alt="' + lcFs[j].l + '" class="letter" />';
					break;
					case n = 2:																// if second 'generate' display type 2 font
						var aca = $(imgher)[0];
						aca.innerHTML += '<img src="img\\lcf\\' + lcFs[j].fs + '" alt="' + lcFs[j].l + '" class="letter" />';
					break;
					case n = 3:
						var aca = $(imgher)[0];
						aca.innerHTML += '<img src="img\\lcf\\' + lcFs[j].fse + '" alt="' + lcFs[j].l + '" class="letter" />';
					break;
					case n = 4:
						var aca = $(imgher)[0];
						aca.innerHTML += lcFs[j].sv;
					break;
				}
			}
		}
		i++;
	}
};

function rGB(boxes, n, re, gr, bl) {        // r=red g=green b=blue a=opacity
  var d = $(box)[0];
	var rgb = $(n)[0];
  var r = document.getElementById(re).value;
  var g = document.getElementById(gr).value;
  var b = document.getElementById(bl).value;
  d.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	rgb.innerText = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function convertToRoman(num) {
  var numStr = num.toString();
  var arr = numStr.split("");
  arr.reverse();
  var romanStr = '';
  var indexNum, numVal, count;
  for (var a = 0; a < arr.length; a++) {
    numVal = arr[a];
    indexNum = arr.indexOf(arr[a]);
    if (numVal == 1 || numVal == 2 || numVal == 3) {
      var b = 0;
      while (b < numVal) {
        if (indexNum == 0) {
          romanStr += 'I';
        } else if (indexNum == 1) {
            romanStr += 'X';
        } else if (indexNum == 2) {
            romanStr += 'C';
        } else if (indexNum == 3) {
            romanStr += 'M';
        }
        b++;
      }
    } else if (numVal == 4 && a == 2) {
        romanStr += 'DC';
    } else if (numVal == 4 && a == 1) {
        romanStr += 'LX';
    } else if (numVal == 4 && a == 0) {
        romanStr += 'VI';
    } else if (numVal == 5 || numVal == 6 || numVal == 7 || numVal == 8) {
        var c = 5;
        while (c < numVal) {
            if (indexNum == 0) {
            romanStr += 'I';
          } else if (indexNum == 1) {
              romanStr += 'X';
          } else if (indexNum == 2) {
              romanStr += 'C';
          } else if (indexNum == 3) {
              romanStr += 'M';
          }
          c++;
        }
         switch (indexNum) {
          case 0:
            romanStr += 'V';
            break;
          case 1:
            romanStr += 'L';
            break;
          case 2:
            romanStr += 'D';
            break;
          case 3:
            romanStr += 'M';
        }
    } else if (numVal == 9 && a == 0) {
        romanStr += 'XI';
    } else if (numVal == 9 && a == 1) {
        romanStr += 'CX';
    } else if (numVal == 9 && a == 2) {
        romanStr += 'MC';
    }
  }
  var romanArr = romanStr.split("");
  romanArr.reverse();
  var romanFinal = romanArr.join("");
  return romanFinal;
}

convertToRoman(44);


/*function inSvg(n, imgPlc, sty) {  			// takes in name (n), image place (imgPlc), font style (sty)
	var lcfs = [
		{
			a: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.99 57"><title>asvg</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,56.84H6.58A6.25,6.25,0,0,0,12,53.1l2.5-6.59a6.25,6.25,0,0,1,5.42-3.74H28"/><path d="M25.45,0,41.82,53.18A2.79,2.79,0,0,1,39,57H34.32"/><path d="M17.89,32.11l2.5-6.59c.78-2.06,2.24-3.74,3.24-3.74h1.82"/></g></g></svg>']
		},
		{
			b: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 50.48"><title>bfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,50.46H4.71c2.2,0,4.88,0,6,0l1,0c4.12-.11,10.23-.26,14.89-2.45a17.25,17.25,0,0,0,8.93-10.8"/><path d="M24.51,17.46A12.18,12.18,0,0,0,33,13.73c2.21-2.4,2.5-4.57,2.5-9.52"/><path d="M11.81,10.84V4c0-2.2.89-4,2-4L15.2,0c3-.1,4-.06,5.61,1.42,1.18,1.09,1,2.82,1,3.46"/><path d="M11.81,35.44v-6.8c0-2.2.89-4,2-4l1.42,0c3-.1,4-.06,5.61,1.42,1.18,1.09,1,2.82,1,3.46"/></g></g></svg>']
		},
		{
			c: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.45 57.03"><title>cfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M9.79,42.46"/><path d="M30.45,0V6.56a4,4,0,0,1-4,4H25.09c-2.2,0-4.57,0-5.27-.05l-.84.05C9.54,11.13,2.38,19.8,1.94,29c-.36,7.56,5.67,12.45,7.85,13.46"/><path d="M30.45,44.42V53a4,4,0,0,1-4,4h-.13c-2.2,0-4.87,0-5.94.06L18.8,57C15.62,56.84,5.65,56.8,0,52.48"/><path d="M27.41,42.46"/></g></g></svg>']
		},
		{
			d: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.71 51.55"><title>dfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M7.59,37.8V4.07c0-2.2.75-4,1.67-4S11.6,0,12.4,0l.66.07c6.78.69,8.36,7.56,9.35,9.41"/><path d="M0,51.53H8.58l6.91,0,.76-.06c9.23-.7,15.35-12,17.46-22.27"/></g></g></svg>']
		},
		{
			e: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.42 57"><title>efi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M34.42,0V7.83a4,4,0,0,1-4,4h-9.5a4,4,0,0,0-4,4v7.83"/><path d="M34.42,21.51v7.83a4,4,0,0,1-4,4h-9.5a4,4,0,0,0-4,4v7.83"/><path d="M34.42,45.17V53a4,4,0,0,1-4,4H0"/></g></g></svg>']
		},
		{
			f: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.48 57"><title>ffi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M35.48,0V7.44a4,4,0,0,1-4,4H14.54a4,4,0,0,0-4,4v7.44"/><path d="M35.48,20.79v7.44a4,4,0,0,1-4,4H14.54a4,4,0,0,0-4,4V53a4,4,0,0,1-4,4H0"/></g></g></svg>']
		},
		{
			g: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.29 57.03"><title>gfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M10.06,42.46"/><path d="M31.29,0V6.56a4,4,0,0,1-4,4H25.67c-2.2,0-4.59,0-5.31-.05l-.87.05C9.81,11.13,2.45,19.8,2,29c-.37,7.56,5.83,12.45,8.07,13.46"/><path d="M0,52.48C5.81,56.8,16.05,56.84,19.32,57l1.63.06c1.1,0,3.79-.06,6-.06h.35a4,4,0,0,0,4-4V30.52"/></g></g></svg>']
		},
		{
			h: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.95 57"><title>hfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M40,0V53a4,4,0,0,1-4,4H28"/><path d="M28,33.72H16.7a4,4,0,0,0-4,4V53a4,4,0,0,1-4,4H0"/><line x1="12.7" y1="23.72" x2="12.7"/><line x1="12.73" x2="12.73" y2="23.72"/><path d="M12.7,0c2.5,0,3.37,5.12,3.37,11.86,0,5.87-.64,11.86-3.34,11.86"/></g></g></svg>']
		},
		{
			i: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.39 57"><title>ifi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M31.63,8.29"/><path d="M34.39,44v9a4,4,0,0,1-4,4H0"/><path d="M34.39,0V7a4,4,0,0,1-4,4H26.34a4,4,0,0,0-4,4V44"/><line x1="12.59" y1="10.81" y2="10.81"/><line x1="12.56" y1="10.84" y2="10.84"/><path d="M12.56,10.81c0,2.53-2.71,3.42-6.28,3.42-3.11,0-6.28-.65-6.28-3.4"/></g></g></svg>']
		},
		{
			j: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.55 56.98"><title>jfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,0V6.4a4,4,0,0,0,4,4H9.89a4,4,0,0,1,4,4V26.62c0,2.2,0,4.88,0,5.94v1c-.11,8.54,0,11.8-1.51,12.88"/><line x1="25.28" y1="10.07" x2="34.55" y2="10.07"/><path d="M0,42.08s0,3.27,0,4.36a9.61,9.61,0,0,0,4.2,8.32c4.09,2.71,11.81,3.08,19,.32"/><line x1="23.24" y1="10.09" x2="34.55" y2="10.09"/><path d="M23.24,10.07c0,2.32,2.44,3.14,5.65,3.14,2.8,0,5.65-.6,5.65-3.11"/></g></g></svg>']
		},
		{
			k: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 57"><title>kfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,57H10.81a4,4,0,0,0,4-4V32"/><path d="M25.9,57H37a2.46,2.46,0,0,0,2.44-3.68L30.26,31.6a10.64,10.64,0,0,1,.05-7.34L41,0"/><line x1="14.81" y1="20.63" x2="14.81"/><line x1="14.96" y1="20.63" x2="14.96" y2="0.27"/><path d="M14.94,20.63c2.32,0,3.14-4.4,3.14-10.18,0-5-.6-10.18-3.11-10.18"/></g></g></svg>']
		},
		{
			l: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 57"><title>kfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,57H10.81a4,4,0,0,0,4-4V32"/><path d="M25.9,57H37a2.46,2.46,0,0,0,2.44-3.68L30.26,31.6a10.64,10.64,0,0,1,.05-7.34L41,0"/><line x1="14.81" y1="20.63" x2="14.81"/><line x1="14.96" y1="20.63" x2="14.96" y2="0.27"/><path d="M14.94,20.63c2.32,0,3.14-4.4,3.14-10.18,0-5-.6-10.18-3.11-10.18"/></g></g></svg>']
		},
		{
			m: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 57"><title>mfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,57H6.28a4,4,0,0,0,4-4V26.71"/><path d="M44.69,57H51a4,4,0,0,0,4-4V0"/><path d="M21.83,28.33c1.49,1.62,1.92,1.33,1-.65L11.72,4.74c-1-2-1.14-1.91-.4.17L16.9,20.64a23.54,23.54,0,0,0,4,6.72Z"/><path d="M39.67,24.21c1.56-1.55,2-1.23.93.7l-12,22c-1.05,1.93-1.23,1.85-.39-.19l6.23-15.17a23.53,23.53,0,0,1,4.36-6.51Z"/></g></g></svg>']
		},
		{
			n: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.64 57"><title>nfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M22.89,31.13c1.42,1.68,1.85,1.41,1-.6L12.57,5.31c-.9-2-1.07-1.94-.38.15L17.94,23a24.47,24.47,0,0,0,3.84,6.85Z"/><path d="M19.45,5.29a1.68,1.68,0,0,1,.12.21s-.08.08-.1.07a1.3,1.3,0,0,1-.21-.13Z"/><path d="M0,57H5.44a4,4,0,0,0,4-4V21.41"/><path d="M28.63,56.33h8a4,4,0,0,0,4-4V0"/></g></g></svg>']
		},
		{
			o: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.55 57"><title>ofi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M15.84,12.8a24.59,24.59,0,0,0-6.05.42C4.35,14.69,0,19.58,0,27.8S3.07,41,8.29,43.25c3,1.29,7.56.89,7.56.89"/><path d="M12,57c6,0,6.57-.17,8.76-.76,9.88-2.66,17.78-11.54,17.78-26.47s-5.57-24-15-28A20.94,20.94,0,0,0,13.19.11"/></g></g></svg>']
		},
		{
			p: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 53.5"><title>pfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,53.5H6.32a4,4,0,0,0,4-4v-21c0-2.2,1.07-4,2.38-3.9l1.6-.1a30.35,30.35,0,0,0,7.31-1.29c1.51-.48,5.79-1.86,8.51-4.8,5.55-6,5.3-16.16,5-17"/><path d="M9.81,10.84V4c0-2.2.89-4,2-4L13.2,0c3-.1,4-.06,5.61,1.42,1.18,1.09,1,2.82,1,3.46"/></g></g></svg>']
		},
		{
			q: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.73 57"><title>qfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M15.91,12.77a24.86,24.86,0,0,0-6.08.42C4.37,14.65,0,19.54,0,27.74S3.08,40.93,8.32,43.15c3,1.29,7.59.89,7.59.89"/><path d="M31.39,50c4.46-4.56,7.34-11.34,7.34-20.32,0-14.76-5.6-23.94-15.11-28A21.16,21.16,0,0,0,13.25.11"/><path d="M31.39,50"/><path d="M30.65,50.74"/><path d="M31.39,50l2.32,3.6c1.19,1.85.37,3.37-1.83,3.37H26"/></g></g></svg>']
		},
		{
			r: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.06 49.82"><title>rfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,49.82H9.79a4,4,0,0,0,4-4V25.56"/><path d="M24.78,49.82h9.79A2.71,2.71,0,0,0,37.3,46L31.18,27.77c-.7-2.09-.59-4.16.24-4.61a7.16,7.16,0,0,0,2-1.59l.35-.3C38.66,17.06,39.46,8.74,35.71,0"/><path d="M13.76,10.86V4.06c0-2.2.89-4,2-4l1.42,0c3-.1,4-.06,5.61,1.42,1.18,1.09,1,2.82,1,3.46"/></g></g></svg>']
		},
		{
			s: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.91 56"><title>sfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M31.71,0s-.43,7.93-2.34,9.07c-.79.48-5.86-1.53-5.86-1.53a25.16,25.16,0,0,0-7.72-1.47H14.2A9.83,9.83,0,0,0,7.89,8.54a9.28,9.28,0,0,0-2.27,5.55,15.47,15.47,0,0,0,.91,5L7.41,21"/><path d="M2.3,30c1.09,1.45,2.77,5.75,8,7.47,4.79,1.56,10.2,0,11.9-.46"/><path d="M0,53.33c.67.43,12.55,5.71,22.89.13,7.55-4.07,10.31-11.85,10-21.24,0,0-9.65,11.61-13.91,14.44C14.39,49.7,0,53.33,0,53.33Z"/></g></g></svg>']
		},
		{
			t: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.52 57"><title>tfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M45.52,0V7a4,4,0,0,1-4,4H33.78a4,4,0,0,0-4,4V53a4,4,0,0,1-4,4H17"/><line x1="16.44" y1="10.81" x2="0.6" y2="10.81"/><line x1="16.44" y1="10.81" y2="10.81"/><line x1="16.41" y1="10.85" y2="10.85"/><path d="M16.41,10.81c0,3-3.55,4.09-8.21,4.09C4.14,14.9,0,14.12,0,10.85"/></g></g></svg>']
		},
		{
			u: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.31 57"><title>ufi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M32,.68H42.31a4,4,0,0,1,4,4V57"/><path d="M0,0H10.27a4,4,0,0,1,4,4V38.33a4,4,0,0,0,4,4H32"/></g></g></svg>']
		},
		{
			v: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.48 57"><title>vfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,.13H4.11A6.83,6.83,0,0,1,9.78,3.76L22.61,31.53"/><path d="M25.74,57,48.19,3.69A2.47,2.47,0,0,0,45.74,0H39.79"/></g></g></svg>']
		},
		{
			w: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.76 57"><defs><style>.cls-1{fill:none;stroke:#ffbf3d;stroke-miterlimit:10;}</style></defs><title>wfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M29.08,33.65c1.48-1.65,1.37.35-.26,4.44L24.27,49.56c-1.62,4.09-2.08,3.94-1-.33l1.2-4.83C25.52,40.14,27.6,35.3,29.08,33.65Z"/><path d="M41.6,36.91c1.44,1.81,1.25,0-.42-4.11L35.56,19.11c-1.67-4.07-2-3.95-.78.27l1.94,6.57C38,30.17,40.16,35.1,41.6,36.91Z"/><path d="M39.72,29.71l-.45,1.13C39,30.05,39,30.05,39.72,29.71Z"/><path d="M0,0H3.46C5.36,0,7.9,2.51,9.11,5.58L19.28,31.4"/><path d="M32.7,32.17"/><path class="cls-1" d="M32.7,32.17"/><path d="M45.68,57,65.28,5.61C66.46,2.52,65.39,0,62.91,0H58.41"/></g></g></svg>']
		},
		{
			x: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.51 57"><title>xfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M38.21,0h9c2.2,0,3,1.46,1.67,3.25L32.29,26.42A6.37,6.37,0,0,0,32.12,33l15.4,24"/><path d="M24.35,21.49,12.52,3.55A8.54,8.54,0,0,0,6.32.13L0,0"/><path d="M20.14,39.79c1.86-1.2,1.22.7-1.42,4.22l-7.41,9.86c-2.64,3.52-3,3.25-.9-.58l2.43-4.34C15,45.11,18.28,41,20.14,39.79Z"/></g></g></svg>']
		},
		{
			y: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.55 57"><title>yfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,0H9.36a6.9,6.9,0,0,1,5.71,3.62L23.76,22"/><path d="M34.15,0H45c2.2,0,3.16,1.59,2.14,3.54L36,24.8a19.33,19.33,0,0,0-1.86,7.54V53a4,4,0,0,1-4,4H27.76a2.63,2.63,0,0,1-2.64-3.76l9-24.9"/></g></g></svg>']
		},
		{
			z: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.34 56.97"><title>zfi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,10.26V4A4,4,0,0,1,4,0L48.34.29"/><path d="M36.78,10.38,3.16,36.44A9.25,9.25,0,0,0,0,42.89V57"/><path d="M16.25,47.25c-2.71.81-1.33,1.48,3.07,1.48h21c4.4,0,4.42-.39,0-.87L29.14,46.64C24.77,46.16,19,46.43,16.25,47.25Z"/></g></g></svg>']
		}
	];
	var name = getElementById(n).value;
	var imPl = getElementById(imPl);
	while (imPl.firstChild) {
		imPl.removeChild(imPl.firstChild);
	}
	var h = 0;
	for (h=0; h<lcfs.length; h++) {
		var letters = Object.keys(lcfs[h][0]);
		return letters;
	}
	var i = 0;
	while (i < name.length) {
		var j = 0;
		for (j=0; j<letters.length; j++) {
			if (letters[j] == name[i]) {
				var imPl = getElementById(imPl);
				imPl.innerHTML +=
			}
		}
	}
}*/
