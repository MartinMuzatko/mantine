import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { RichTextEditor } from './RichTextEditor';
import { RichTextEditor as RichTextEditorStylesApi } from '../../styles.api';

const defaultProps = {
  value: '',
  onChange: () => {},
};

describe('@mantine/core/RichTextEditor', () => {
  itSupportsClassName(RichTextEditor, defaultProps);
  itSupportsSx(RichTextEditor, defaultProps);
  itSupportsOthers(RichTextEditor, defaultProps);
  itSupportsStyle(RichTextEditor, defaultProps);
  itSupportsMargins(RichTextEditor, defaultProps);
  itSupportsStylesApi(
    RichTextEditor,
    defaultProps,
    Object.keys(RichTextEditorStylesApi),
    'RichTextEditor'
  );

  it('has correct displayName', () => {
    expect(RichTextEditor.displayName).toEqual('@mantine/rte/RichTextEditor');
  });
});
