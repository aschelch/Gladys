const { expect } = require('chai');

const models = require('../../../../services/sonoff/models');
const { DEVICE_FEATURE_CATEGORIES, DEVICE_FEATURE_TYPES } = require('../../../../utils/constants');

const modelId = 12;

describe('SonoffService - Model - 1 Channel', () => {
  it('get model for Sonoff 1 Channel', () => {
    const model = models[modelId].getModel();

    expect(model).to.eq('sonoff-1-channel');
  });

  it('get label for Sonoff 1 Channel', () => {
    const label = models[modelId].getLabel();

    expect(label).to.eq('Sonoff 1 Channel');
  });

  it('get features for Sonoff 1 Channel', () => {
    const features = models[modelId].getFeatures('device_external_id');

    expect(features).to.deep.eq([
      {
        name: 'Switch',
        external_id: 'device_external_id:switch:binary',
        selector: 'device-external-id-switch-binary',
        category: DEVICE_FEATURE_CATEGORIES.SWITCH,
        type: DEVICE_FEATURE_TYPES.SWITCH.BINARY,
        read_only: false,
        has_feedback: true,
        min: 0,
        max: 1,
      },
    ]);
  });
});