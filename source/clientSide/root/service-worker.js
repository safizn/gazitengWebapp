/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';


importScripts("app/javascripts/additional-service-worker.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["app/elements/answers-item.html","8ffc85d25c75c67741d0d4aa4f3274a0"],["app/elements/card-concept.html","cb493550d6a922b8f4de2518fa1659a4"],["app/elements/card-section.html","aa26cd056b3608fb62b9e6ec5a1d7b7d"],["app/elements/choice-listitem.html","d1b224e4e5bfb17428498dddacf05ee8"],["app/elements/dropdown-select.html","1c0643b5b992c44161b963daa72077bf"],["app/elements/examinations-data.html","4909e6b4ffffc478ad1780b8cddedf7b"],["app/elements/examinations-view.html","388d71b58cd924a06001233e098d9362"],["app/elements/list-item.html","ce9874065ecd78abffbffcf2c60f29db"],["app/elements/mcq-listitem.html","58a9dc912471d358ccc9bfc13828522a"],["app/elements/questions-data.html","fc2dcdeaa80185f33180a762b9ec288d"],["app/elements/questions-item.html","d2213c65fd68f523e8e104268e009a00"],["app/elements/questions-list.html","5fb80278ccda26078126553fb53d1e7d"],["app/elements/reference-listitem.html","65c26cc058e85674134d0fb496b7b9b3"],["app/elements/scroll-top.html","ef81750f83f35010aaf4508e140e12fc"],["app/elements/title-concept.html","f6a5ff010d6e9c4f6f4aaa15c6bfd6e4"],["app/elements/tweaksToOfficialElements/paper-menu-button.html","5fc05d2ddd4bad1d29290ac4a19f3e4b"],["app/fonts/FertigoProRegular/Fertigo_PRO.html","fee1c0bd6169da4a7f50484d049e5725"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Black.css","db1f9befafcdd26ad3c4cc56d92150df"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Black.html","97a17a178179a9bae921b747eb399a7c"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-BlackItalic.css","2b922e7677a4eaf79653a74a1cf69b15"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-BlackItalic.html","746a320bac922b9d83909581bcc0f5c3"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Bold.css","9eb1d8296cb074909eac07c43e202567"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Bold.html","a55c732f35139f769204a10169b75840"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-BoldItalic.css","24ed69c5f0130e5729385ac276816a6f"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-BoldItalic.html","e84c3d3071f01779cf6ac3aef580a74a"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Hairline.css","6672255908116bac2d059623a82a901c"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Hairline.html","e61e3f5c36a9ca484eeacc9d3f1a8aff"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-HairlineItalic.css","06a76009e71462a84b533defd64b226d"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-HairlineItalic.html","005a6bcf4a2b901c6c2f967de20fbf89"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Heavy.css","3b109f8990287d422e93e2e3bcfe6e90"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Heavy.html","972834d3cece7eea7ae5e1ad6a025f90"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-HeavyItalic.css","1809733585ed9cd7e9b7f26e240f57cc"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-HeavyItalic.html","6e4cc9b2cbf1e470135de0bfbeca77d7"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Italic.css","77b070a228b2026cdb4c36ffc756b82b"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Italic.html","c292d8ef52e88eec09391921f73ad658"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Light.css","1ff1fe0da68995d090e5206b30a329df"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Light.html","0070e591236fcc67da9c42f2b3509523"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-LightItalic.css","b061f07d6026d03ab6d56894a20857b7"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-LightItalic.html","2fcf65c7604f3669389659eaaa05d105"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Medium.css","93224cd7c5d153665b13e68dbcdb634a"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Medium.html","0efae93cfbb88939982e2a9081c60ab7"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-MediumItalic.css","b076d575bb933824f14ca9ac9e1daaab"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-MediumItalic.html","b1b37a5c8e1283259d542d072cd1c930"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Regular.css","d2c57f857dee7206904a4b5065f15ee8"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Regular.html","cfc7a289192cb987084d51c88684ce12"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Semibold.css","56e93464b0f6afd09febb095ad0a5e4d"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Semibold.html","1f07f407c2fe494e301de352a0509700"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-SemiboldItalic.css","ba7a2ddae22d103aaf76409c8ee1ae7f"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-SemiboldItalic.html","87d0e3241ad3918b184591d711dc46dd"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Thin.css","fbc50f3f0201a3742b6484353f369dda"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-Thin.html","0c85a89abf072bb6937eec4a389b0029"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-ThinItalic.css","ccfa1f5b76623f668163c68fc8909810"],["app/fonts/Lato2OFL/Lato2OFLWeb/Lato/Lato-ThinItalic.html","ec1b0b825785b160bce8af1ab98af9fe"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatin-Bold.css","f77f492764d30d233dc95f27ccb4182d"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatin-Bold.html","04ab78c21be62b0cc57e65e747d9fdd1"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatin-BoldItalic.css","84d5e0c89434cdce09b30ca4554822f1"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatin-BoldItalic.html","fa24514c138dc5c4af3b1c90f5be50b1"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatin-Italic.css","1918b328ae6a47ecca8168e8389b9134"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatin-Italic.html","379f1de34acca3f5c97978253469f0bb"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatin-Regular.css","e936a4a37b6c2cea388c825adb223686"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatin-Regular.html","fa3c1bebacaecc50ee48d055fd26238a"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinBlack-Italic.css","4dd16ea4ab3a66d5c9a45b5947ed3aa4"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinBlack-Italic.html","925034d5ec2272cfc5d9fba7a170bfad"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinBlack-Regular.css","796af2c06b2094e627e272fad79fb377"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinBlack-Regular.html","4164044ef49c6155e64aed99c81783fd"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinExtBd-Italic.css","839bfaeaf014df5c4f9bacac6420ab1c"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinExtBd-Italic.html","fbd5712b685fbb3ec5b913fe68a9ed40"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinExtBd-Regular.css","db62a01919968b24f959348c95490c31"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinExtBd-Regular.html","e493a94e7c20eb8b7d7f0218af70c9b2"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinHair-Italic.css","d1361e4205411b9a815105f3e6bc773f"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinHair-Italic.html","084de31a8102d2fb2129916f80a45fb0"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinHair-Regular.css","f60a0c918e1c00d0af3387a545259a9f"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinHair-Regular.html","36a8e4548edb4bef8d9257fb37508424"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinLight-Italic.css","521c870ccfaa6791d138a936e82a1406"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinLight-Italic.html","7b7aaa422cadc7a8fe99dcb9e7cf606b"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinLight-Regular.css","d3b5272726f018a807bf9c44d23ca346"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinLight-Regular.html","0a722d1bc87949fa08c878f3e600feaa"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinMed-Italic.css","947d4ce799fcbeae2ded30bcc9bb91f2"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinMed-Italic.html","319a77121c865e34b6bce5a971ebad74"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinMed-Regular.css","cd87ff05ef92857c184b492301be6bff"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinMed-Regular.html","a9856cf1c7f2f6e2f9837b7fee7baa7c"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinSemBd-Italic.css","385326629da72bad950ce6a1fcf7ce93"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinSemBd-Italic.html","d33075e039cb04bd7afafdb0fe12dfad"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinSemBd-Regular.css","89892c49b7ebfdb5a4653808fa6472ce"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinSemBd-Regular.html","3efbba8abf1603f9240d8baf9b3e3f27"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinThin-Italic.css","430db0346a65bf665786918d5f8d2087"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinThin-Italic.html","f45e36dc11a053513fb2c6d8b082fd89"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinThin-Regular.css","b358f1f586deb64ff9b8ebdc506ab317"],["app/fonts/Lato2OFL/Lato2OFLWeb/LatoLatin/LatoLatinThin-Regular.html","c2a025a39f6f003dafa4d84a4a5484eb"],["app/fonts/Scheherazade/demo.html","e58b9534bff2d7220d0de133af85dd1f"],["app/fonts/Scheherazade/stylesheet.css","f5cc2ecda1f07f484109054bb47e39b2"],["app/javascripts/acf-validation.js","acf82c98f9c5a8e91023abd7ba396033"],["app/javascripts/additional-service-worker.js","a7c9d4faabd10f0cb2f34244bda9377d"],["app/javascripts/addons_library/Woothemes-FlexSlider2/All these are examples index.html","f081095eea45284eafa54620f829dc55"],["app/javascripts/addons_library/Woothemes-FlexSlider2/basic-carousel.html","7ca3b4157470a5c3645b206eb876e32a"],["app/javascripts/addons_library/Woothemes-FlexSlider2/carousel-min-max.html","39f946ac4918c61603e909175ff64c76"],["app/javascripts/addons_library/Woothemes-FlexSlider2/css/demo.css","5adb6c1c9a19854b30d7bf091f5cf27f"],["app/javascripts/addons_library/Woothemes-FlexSlider2/css/flexslider.css","98fa5ab4213de7c59ad633770aa956f5"],["app/javascripts/addons_library/Woothemes-FlexSlider2/dynamic-carousel-min-max.html","eeadaceccce167c08189eac4f71c7258"],["app/javascripts/addons_library/Woothemes-FlexSlider2/fonts/webfonts/geo-medium/svg/svg_test.html","c614c3293e44f3ede3ce5c2488c92225"],["app/javascripts/addons_library/Woothemes-FlexSlider2/fonts/webfonts/geo-regular/svg/svg_test.html","e55872587fa2db1747321a9a017a0df7"],["app/javascripts/addons_library/Woothemes-FlexSlider2/fonts/webfonts/geo-semibold/svg/index.html","5cd68b178a3ef304e31a55c7ccac3901"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/demo.js","1301c50e5e8ed192e3bf92501dc3efba"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/froogaloop.js","e743b8d812558184ec3d4cae1038d551"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/jquery.easing.js","5d1439f76537cbe4784f036b47540663"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/jquery.fitvid.js","be5462a6542e4102346a897bc09d8f87"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/jquery.flexslider-min.js","9ec3c315b67f434aabc4da58eabc6c3a"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/jquery.flexslider.js","742ccf551a8857368111cfefe2c2ee6f"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/jquery.mousewheel.js","b8a3ea9e7aad0c0299dbe5cfe5ede202"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/modernizr.js","45b8019544658adc80276650404767bf"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/shBrushCss.js","a07a03d9b8a586105267106ed629339e"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/shBrushJScript.js","cdae918e2156986f76ada6d301c45f27"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/shBrushXml.js","ba290ac0111d2c3f8e1ce36fbaf6a239"],["app/javascripts/addons_library/Woothemes-FlexSlider2/js/shCore.js","488ca2f56c37f84283fc9be63219304f"],["app/javascripts/addons_library/Woothemes-FlexSlider2/thumbnail-controlnav.html","6cf41cd6caf596f7d4d56c0939d2bce0"],["app/javascripts/addons_library/Woothemes-FlexSlider2/thumbnail-slider.html","1571eab567a3d9a78d3958e831c7757f"],["app/javascripts/addons_library/Woothemes-FlexSlider2/video-wistia.html","13a74850780cb99f60fa7dc5c2c54cbf"],["app/javascripts/addons_library/Woothemes-FlexSlider2/video.html","7eb6c1c937c7a1695e11953f74767a4d"],["app/javascripts/addons_library/bootstrap.min.js","be1c5898c4332c8e7f9906011e005bb0"],["app/javascripts/addons_library/idangerous.swiper.hashnav.min.js","b5f777001547ca122fc86f4bd8991eaa"],["app/javascripts/addons_library/idangerous.swiper.min.js","798e197274af3192cf14d15ad2a66d4f"],["app/javascripts/addons_library/imagesloaded.pkgd.min.js","d6ffbca25a6254cfeb105058e5d9d920"],["app/javascripts/addons_library/jquery.infinitescroll.min.js","24131ba057a50077af7a97dfa1fcde30"],["app/javascripts/addons_library/jquery.menu-aim.js","3585a35c538af1622a0410b5aece184d"],["app/javascripts/addons_library/jquery.mousewheel.min.js","699b14b3cd0a2c849f60cc037967b9df"],["app/javascripts/admin-script.js","8d97a0c949f68aa1a2bbe39f885c86fb"],["app/javascripts/cache-polyfill.js","3c708b22699a70e81d60f230b05e1637"],["app/javascripts/service-worker-registration.js","4bc155b4796c513a88b58375f9527d0f"],["app/styles/admin-custom-type-quize.css","9b57828b8fc469036ebaa702405de07c"],["app/styles/admin-style.css","5daf3679b4b231d348812496f2438964"],["app/styles/bootstrap.css","5b2f567930806ee20fc7a7b5a25f597b"],["app/styles/css_simple_reset.css","4884e7966b6f872b10f08ff1a84ee542"],["app/styles/effects.css","86365d456031b32c5f1f8a0d6243e675"],["app/styles/font-awesome/css/font-awesome.css","3f05a51a1e5260f4179db8ca65307a6a"],["app/styles/font-awesome/css/font-awesome.min.css","04425bbdc6243fc6e54bf8984fe50330"],["app/styles/font-face.css","ec5d156aebec2f996845d89000d7609b"],["app/styles/footer.css","afde1365445ff4c2fd56a84296112f3b"],["app/styles/general-custom-styles.css.html","78bd285410c764bdfdceda29ec733157"],["app/styles/idangerous.swiper.css","3a968b84549a82d8a0c2853b09697de8"],["app/styles/loader.css","b3afd976df653b2dd4a508c83142c26a"],["app/styles/main.css","78096fe9b942a2cfa09cc75b7e4d0f4d"],["app/styles/masonry.css","d327daad9431bd51ec6d7c52209fae75"],["app/styles/mobile.css","66e61b552a7fcc6c4dd2cb329a6786d8"],["app/styles/side-navigation.css","802501f1566106d9449545a92e0af545"],["app/styles/sidebar.css","8c56bd42fe8e657b14b40949799e2652"],["app/styles/singlepage-sharing-buttons.css","9bdf12290a529d157446bb6f12f06a39"],["app/styles/singlepage.css","4de5c480752368c9dfeabbe516fa83dc"],["app/styles/specific-page-css/about.css","d41d8cd98f00b204e9800998ecf8427e"],["app/styles/top-navigation.css","2502b357737791dbcfa98ce023ec1993"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/ScrollMagic.js","a76c08d497147b5dd5e56627bf1ce452"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/analytics.js","c889d7f1e7e37c77f20c434f5e268b60"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/debug.addIndicators.js","399c718c3d6ece3fef517a015f8359b1"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/examples.css","d5abf30c645a6828ca5c924558749140"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/examples.js","05b1c9c5adb255edadbfc14e2ddb199d"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/highlight.pack.js","117f4bbdfbc7baa19b9ac21a638452d4"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/jquery.min.js","3c9137d88a00b1ae0b41ff6a70571615"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/modernizr.custom.min.js","15ba3cd0b95c009360163b4b498d794e"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/normalize.css","91e3e4442e26587a008d9a835ec644cd"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/style.css","f80241c4dbb35f0a14d14db9effccd24"],["app/templates/codeblocks/_testing/Sticky Elements (pinning) - Examples - ScrollMagic_files/tracking.js","4489bfb3233e3620aa10f88fbfa265e5"],["app/templates/codeblocks/_testing/sticky.html","7a04ccae7ad76afe231cad90d5afc7ae"],["routing/inc/css/colorpicker.css","93b007836cafea87253f845c5c360e64"],["routing/inc/css/optionsframework.css","c58a76a787cd9d43013221aed57969b7"],["routing/style.css","869f0912a7eb0c9d3f193758c6e8f587"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});

