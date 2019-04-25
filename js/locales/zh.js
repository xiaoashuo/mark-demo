/*!
 * Chinese Translations for krajee-markdown-editor
 *
 * This file must be loaded after 'markdown-editor.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 * 
 * @see http://plugins.krajee.com/markdown-editor
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 * 
 * author ys
 */
$.fn.markdownEditorLocales['zh-CN'] = $.fn.markdownEditorLocales['zh-Hans'] = $.fn.markdownEditorLocales.zh = {
    ajaxParserErrorMsg: '错误解析 markdown text. 请稍后再试.',
    ajaxParserProgressMsg: '解析 markdown text ...',
    noDataMsg: '没有找到有效的数据!',
    exportFileName: 'MarkDown导出',
    buttonTitles: {
        undo: '撤销',
        redo: '重做',
        bold: '粗体',
        italic: '斜体',
        ins: '下划线 / 插入文本',
        del: '删除线',
        sup: '上标',
        sub: '下标',
        mark: '高亮',
        paragraph: '段落',
        newline: '添加换行符',
        heading: '标题',
        link: '超链接',
        image: '图片链接',
        indent: '文本缩进',
        outdent: '减少缩进文本',
        ul: '无序列表',
        ol: '有序列表',
        dl: '定义列表',
        footnote: '脚注',
        blockquote: '块引用',
        code: '内联代码',
        codeblock: '代码块',
        hr: '水平线',
        emoji: '表情 / 表情符号',
        fullscreen: '切换全屏模式',
        hint: '使用提示',
        modeEditor: '编辑模式',
        modePreview: '预览模式',
        modeSplit: '分离模式',
        export: '导出内容',
        exportHtml: '导出为HTML',
        exportText: '导出为Text'
    },
    buttonLabels: {
        export: '导出',
        exportHtml: 'HTML',
        exportText: 'Text'
    },
    buttonPrompts: {
        link: {
            header: '插入超链接',
            hintInput: '输入链接地址...',
            hintTitle: '链接文本...'
        },
        image: {
            header: '插入图片链接',
            hintInput: '输入图片链接地址...',
            hintTitle: '图像替代文本...'
        },
        ol: {
            header: '有序列表起始编号',
            hintInput: '整数从 1'
        },
        codeblock: {
            header: '输入代码语言',
            hintInput: 'e.g. html, php, js,  java'
        }
    },
    buttonActions: {
        bold: {markup: '**(这里粗体文本)**'},
        italic: {markup: '_(这里斜体文本)_'},
        ins: {markup: '_(这里插入文本)_'},
        del: {markup: '_(这里删除线文本)_'},
        mark: {markup: '_(这里标记文本)_'},
        sup: {markup: '_(这里上标文本)_'},
        sub: {markup: '_(这里下表文本)_'},
        paragraph: {markup: '\n(这里段落文本)\n'},
        heading1: {markup: '# (一级标题)'},
        heading2: {markup: '## (二级标题)'},
        heading3: {markup: '### (三级标题)'},
        heading4: {markup: '#### (四级标题)'},
        heading5: {markup: '##### (五级标题)'},
        heading6: {markup: '###### (六级标题)'}
    },
    templates: {
        exportHeader: '> - - -\n' +
        '> Markdown 导出\n' +
        '> ==============\n' +
        '> *生成的 {TODAY} by {CREDITS}*\n' +
        '> - - -\n\n',
        hint: '<ul>\n' +
        '  <li><p>你可以按照 这个 {LINK_CM} 规范 (生成 出 {LINK_MI} 插件) 写作你的 markdown 文本.</p></li>\n' +
        '  <li><p>以便去使用工具栏上的格式化按钮, 你通常需要去突出显示文本 ' +
        '  在要应用格式的编辑器种. 你也能撤销这个格式化动作 ' +
        '  再次单击按钮突出显示文本(对于大多数按钮).</p></li>\n' +
        '  <li><p>键盘按键的快捷方式:</p>' +
        '    {ACCESS_KEYS}' +
        '  </li>\n' +
        '</ul>'
    },
    dialogCancelText: '取消',
    dialogSubmitText: '提交',
    previewErrorTitle: '预览错误',
    previewModeTitle: '预览模式',
    noPreviewUrlMsg: 'Markdown 预览处理器不可用。请与系统管理员联系.',
    previewProgressMsg: '生成预览 ...',
    noExportUrlMsg: '导出功能不可用。请与系统管理员联系.',
    emojiSearchHint: '搜索表情 ...',
    loadingMsg: '加载中 ...'
};