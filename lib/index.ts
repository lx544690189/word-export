import { TestProps } from './interface';
import FileSaver from 'file-saver';

/** html转换 */
export default class WordExport {


  public export() {
    const config = {
      href: 'baidu.com',
    };
    const template = `Mime-Version: 1.0
Content-Base: ${config.href}
Content-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"

--NEXT.ITEM-BOUNDARY
Content-Type: text/html; charset="utf-8"
Content-Location: ${config.href}

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>

</style>
</head>
<body>
  <div class="panel-body">
      <h1 >Hello, world!</h1>
      <p>This jQuery plugin takes the HTML from any element on the page and converts it (all on the client-side) to MHTML (MIME-HTML) with .doc as the file extension. What this does is that it archives the HTML by embedding images into the file for offline viewing, and then Microsoft Word will open the file and automatically interpret it into a rich document with header and body styles as well as images. Go ahead and click the link on the right to try it out. Note that it won't work on a phone or tablet, and you'll need to open with Microsoft Word for it to correctly interpret the file (currently, the output file doesn't get handled properly by LibreOffice).</p>
      <p><img src="https://markswindoll.github.io/jquery-word-export/image.gif" alt="image" width="0" height="0"></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula bibendum lacinia. Pellentesque placerat interdum nisl non semper. Integer ornare, nunc non varius mattis, nulla neque venenatis nibh, vitae cursus risus quam ut nulla. Aliquam erat volutpat. Aliquam erat volutpat. Etiam eu auctor risus, condimentum sodales nisi. Curabitur aliquam, lorem accumsan aliquam mattis, sem ipsum vulputate quam, at interdum nisl turpis pharetra odio. Vivamus diam eros, mattis eu dui nec, blandit pulvinar felis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula bibendum lacinia. Pellentesque placerat interdum nisl non semper. Integer ornare, nunc non varius mattis, nulla neque venenatis nibh, vitae cursus risus quam ut nulla. Aliquam erat volutpat. Aliquam erat volutpat. Etiam eu auctor risus, condimentum sodales nisi. Curabitur aliquam, lorem accumsan aliquam mattis, sem ipsum vulputate quam, at interdum nisl turpis pharetra odio. Vivamus diam eros, mattis eu dui nec, blandit pulvinar felis.</p>
  </div>
</body></html>
--NEXT.ITEM-BOUNDARY
Content-Location: ${config.href}
Content-Type: data:
Content-Transfer-Encoding: data:



--NEXT.ITEM-BOUNDARY--`;
    const blob = new Blob([template], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, 'test.doc');
  }
}
