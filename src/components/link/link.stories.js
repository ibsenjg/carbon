import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import OptionsHelper from '../../utils/helpers/options-helper';
import notes from './notes.md';
import Link from './link';

storiesOf('Link', module)
  .add('default', () => {
    const children = text('children', 'Link');
    const disabled = boolean('disabled', false);
    const href = text('href', '');
    const icon = select('icon', OptionsHelper.icons, '');
    const iconAlign = select(
      'iconAlign',
      OptionsHelper.alignBinary,
      Link.defaultProps.iconAlign
    );
    const tabbable = boolean('tabbable', Link.defaultProps.tabbable);
    const to = text('to', '');
    const tooltipMessage = text('tooltipMessage', '');
    const tooltipPosition = select('tooltipPosition', OptionsHelper.positions);
    const tooltipAlign = select('tooltipAlign', OptionsHelper.alignAroundEdges);

    return (
      <Link
        disabled={ disabled }
        href={ href }
        icon={ icon }
        iconAlign={ iconAlign }
        tabbable={ tabbable }
        to={ to }
        tooltipMessage={ tooltipMessage }
        tooltipPosition={ tooltipPosition }
        tooltipAlign={ tooltipAlign }
        onClick={ action('click') }
      >
        {children}
      </Link>
    );
  }, {
    notes: { markdown: notes }
  });
