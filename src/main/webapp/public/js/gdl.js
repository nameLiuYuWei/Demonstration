/****************************************************************
 
jQuery ���.
 
����: �̶��������л���ͷ
 
Version: 1.0
 
���÷���:
$('#myTable').fixTable(
    pRow, //�ɹ��������һ�е��к�
    pCol, //�ɹ��������һ�е��к�
    splitColor, //(��ѡ)�̶��������������ķָ�����ɫ
);
 
 
****************************************************************/

jQuery.fn.extend({
    fixTable: function (pRow, pCol, splitColor) {
        //���������
        var scrW = 16;

        //���÷ָ�����ɫ
        if (!splitColor) {
            splitColor = '#333';
        }

        //�õ������
        var t = $(this);
        var pid = 'fixbox_' + t.attr('id');

        t.show();

        //�õ����ʵ�ʴ�С
        var tw = t.outerWidth(true);
        var th = t.outerHeight(true);

        //���ⲿ��һ��DIV,������ȡ������ʾ�����С
        t.wrap("<div id='" + pid + "' ></div>");
        var p = $('#' + pid);
        p.css({
            width: '100%',
            height: '100%',
            border: '0px',
            margin: '0 0 0 0',
            padding: '0 0 0 0'
        });

        //������ʾ�����С
        t.hide();
        var cw = p.outerWidth(true);
        var ch = p.outerHeight(true);
        t.show();

        //�õ�����HTML����
        var thtml = p.html();

        //�ж��Ƿ���Ҫ�̶�����ͷ
        if (tw <= cw && th <= ch) {
            return;
        }
        //�ж���Ҫ�̶���/��/����
        var fixType = 4;    //ȫ�̶�
        if (tw <= cw - scrW) {    //��ȹ�, �߶Ȳ���
            fixType = 1;    //�й̶�
            cw = tw + scrW;
        } else if (th <= ch - scrW) {    //�߶ȹ�, ��Ȳ���
            fixType = 2;    //�й̶�
            ch = th + scrW;
        }
        //�̶���Ԫ���λ��
        var w1 = 0;
        var h1 = 0;

        var post = t.offset();
		

        var p1, p2, p3, p4;
        if (fixType == 4) {    //��ͷ��ͷ����̶�
            //ȡ��ָ�����е�Ԫ�����Ͻǵ�λ��,��λpx
            var pos = t.find('tr').eq(pRow).find('td').eq(pCol).offset();

            w1 = pos.left - post.left;
            h1 = pos.top - post.top;

            var tmp = '<table style="background: #ECE9D8;" ';
            tmp += 'border="0" cellspacing="0" cellpadding="0">';
            tmp += '<tr><td style="border-right: 1px solid ' + splitColor +
                ';border-bottom: 1px solid ' + splitColor + '">';
            tmp += '<div id="' + pid + '1"></div></td>';
            tmp += '<td style="border-bottom: 1px solid ' + splitColor +
                ';"><div id="' + pid + '2"></div></td></tr>';
            tmp += '<tr><td valign="top" style="border-right: 1px solid ' +
                splitColor + ';"><div id="' + pid + '3"></div></td>';
            tmp += '<td><div id="' + pid + '4"></div></td></tr>';
            tmp += '</table>';

            p.before(tmp);

            $('div[id^=' + pid + ']').each(function () {
                $(this).css({
                    background: 'white',
                    overflow: 'hidden',
                    margin: '0 0 0 0',
                    padding: '0 0 0 0',
                    border: '0'
                });
            });
            p1 = $('#' + pid + '1');
            p2 = $('#' + pid + '2');
            p3 = $('#' + pid + '3');
            p4 = $('#' + pid + '4');

            //���ϽǷ���
            p1.html(thtml).css({ width: w1 - 1, height: h1 - 1 });
            p1.find('table:first').attr('id', undefined);

            //���Ϸ���
            p2.html(thtml).css({ width: cw - w1 - scrW, height: h1 - 1 });
            p2.find('table:first').css({
                position: 'relative',
                left: -w1
            }).attr('id', undefined);

            //���·���
            p3.html(thtml).css({ width: w1 - 1, height: ch - h1 - scrW });
            p3.find('table:first').css({
                position: 'relative',
                top: -h1
            }).attr('id', undefined);

            //������
            p4.append(p).css({
                width: cw - w1,
                height: ch - h1,
                overflow: 'auto'
            });

            t.css({
                position: 'relative',
                top: -h1,
                left: -w1
            });

            p.css({ width: tw - w1, height: th - h1, overflow: 'hidden' });

            p4.scroll(function () {
                p2.scrollLeft($(this).scrollLeft());
                p3.scrollTop($(this).scrollTop());
            });
        } else if (fixType == 1) {    //ֻ��̶���ͷ
            var pos = t.find('tr').eq(pRow).find('td').first().offset();
            h1 = pos.top - post.top;

            var tmp = '<table style="background: #ECE9D8;" ';
            tmp += 'border="0" cellspacing="0" cellpadding="0">';
            tmp += '<tr><td style="border-bottom: 1px solid ' + splitColor + '">';
            tmp += '<div id="' + pid + '1"></div></td></tr>';
            tmp += '<tr><td><div id="' + pid + '2"></div></td></tr>';
            tmp += '</table>';

            p.before(tmp);

            $('div[id^=' + pid + ']').each(function () {
                $(this).css({
                    background: 'white',
                    overflow: 'hidden',
                    margin: '0 0 0 0',
                    padding: '0 0 0 0',
                    border: '0'
                });
            });
            p1 = $('#' + pid + '1');
            p2 = $('#' + pid + '2');
            //�Ϸ�����
            p1.html(thtml).css({ width: tw, height: h1 - 1 });
            p1.find('table:first').attr('id', undefined);

            //������
			
            p2.append(p).css({
                width: cw + 1,
                height: ch - h1,
                overflow: 'auto'
            });

            t.css({
                position: 'relative',
                top: -h1,
                left: 0
            });

            p.css({ width: tw, height: th - h1, overflow: 'hidden' });
        } else if (fixType == 2) {    //ֻ��̶���ͷ
            var pos = t.find('tr').first().find('td').eq(pCol).offset();
            w1 = pos.left - post.left;

            var tmp = '<table style="background: #ECE9D8;" ';
            tmp += 'border="0" cellspacing="0" cellpadding="0">';
            tmp += '<tr><td valign="top" style="border-right: 1px solid ' + splitColor + '">';
            tmp += '<div id="' + pid + '1"></div></td>';
            tmp += '<td><div id="' + pid + '2"></div></td></tr>';
            tmp += '</table>';

            p.before(tmp);

            $('div[id^=' + pid + ']').each(function () {
                $(this).css({
                    background: 'white',
                    overflow: 'hidden',
                    margin: '0 0 0 0',
                    padding: '0 0 0 0',
                    border: '0'
                });
            });
            p1 = $('#' + pid + '1');
            p2 = $('#' + pid + '2');
            //�Ϸ�����
            p1.html(thtml).css({ width: w1 - 1, height: th });
            p1.find('table:first').attr('id', undefined);

            //������
			
            p2.append(p).css({
                width: cw - w1,
                height: ch + 1,
                overflow: 'auto'
            });

            t.css({
                position: 'relative',
                top: 0,
                left: -w1
            });

            p.css({ width: tw - w1, height: th, overflow: 'hidden' });
        }
    }
});