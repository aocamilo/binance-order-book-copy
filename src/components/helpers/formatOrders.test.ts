import React from 'react';
import { formatOrders } from './formatOrders';
import { ResponseOrderRow } from '../../constants/types/index';
import { expectedResult, rawdata } from './tests.mocks';

test('When formatting orders, it should render correctly according to the decimal aggregation', () => {
  const data100 = formatOrders(rawdata as ResponseOrderRow[], 100);

  expect(data100).toEqual([
    [19800, 4.903030000000001],
    [20000, 0.0409],
  ]);

  const data50 = formatOrders(rawdata as ResponseOrderRow[], 50);

  expect(data50).toEqual([
    [19800, 4.901630000000001],
    [19850, 0.0014],
    [20000, 0.0399],
    [20050, 0.001],
  ]);

  const data10 = formatOrders(rawdata as ResponseOrderRow[], 10);

  expect(data10).toEqual([
    [19810, 1.96048],
    [19820, 2.56646],
    [19830, 0.37469],
    [19870, 0.0014],
    [20010, 0.0399],
    [20070, 0.001],
  ]);

  const data1 = formatOrders(rawdata as ResponseOrderRow[], 1);

  expect(data1).toEqual([
    [19816, 0.01176],
    [19817, 0.43826],
    [19818, 1.41046],
    [19819, 0.1],
    [19820, 0.05949],
    [19821, 1.13268],
    [19823, 0.46404],
    [19824, 0.02],
    [19825, 0.72853],
    [19826, 0.03],
    [19829, 0.13172],
    [19831, 0.13005],
    [19837, 0.10081],
    [19838, 0.14383],
    [19875, 0.0014],
    [20014, 0.0399],
    [20072, 0.001],
  ]);

  const data01 = formatOrders(rawdata as ResponseOrderRow[], 0.1);

  expect(data01).toEqual([
    [19816.6, 0.002],
    [19816.7, 0.00976],
    [19817.1, 0.18594],
    [19817.4, 0.25232],
    [19818, 1.10861],
    [19818.5, 0.30185],
    [19819.4, 0.1],
    [19820.6, 0.03679],
    [19820.9, 0.0227],
    [19821.1, 0.049780000000000005],
    [19821.2, 0.05382],
    [19821.3, 0.02],
    [19821.5, 1.00908],
    [19823, 0.46404],
    [19824.6, 0.02],
    [19825.1, 0.001],
    [19825.8, 0.72753],
    [19826.1, 0.03],
    [19829.2, 0.13172],
    [19831.5, 0.13005],
    [19837.9, 0.10081],
    [19838.9, 0.14383],
    [19875.7, 0.0014],
    [20014.5, 0.0399],
    [20072.7, 0.001],
  ]);

  const data001 = formatOrders(rawdata as ResponseOrderRow[], 0.01);
  expect(data001).toEqual(expectedResult);
});
