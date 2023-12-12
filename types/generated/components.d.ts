import type { Schema, Attribute } from '@strapi/strapi';

export interface FeesFees extends Schema.Component {
  collectionName: 'components_fees_fees';
  info: {
    displayName: 'fees';
    icon: 'priceTag';
  };
  attributes: {
    deposit_fee: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    exchange_fee: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    withdrawal_fee_btc: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    withdrawal_fee_eth: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    withdrawal_fee_usdt: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    withdrawal_fee_ltc: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    withdrawal_fee_trx: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
  };
}

export interface FeesReferral extends Schema.Component {
  collectionName: 'components_fees_referrals';
  info: {
    displayName: 'referral';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    line_one_member: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    line_one_percent: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    line_two_member: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    line_two_percent: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    line_three_member: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
    line_three_percent: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }> &
      Attribute.DefaultTo<0>;
  };
}

export interface UrlButton extends Schema.Component {
  collectionName: 'components_url_buttons';
  info: {
    displayName: 'button';
    icon: 'cast';
  };
  attributes: {
    home_page: Attribute.String;
    top_up_wallel: Attribute.String;
    login: Attribute.String;
    signup: Attribute.String;
    start: Attribute.String;
    subscribe: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fees.fees': FeesFees;
      'fees.referral': FeesReferral;
      'url.button': UrlButton;
    }
  }
}
