import {
  createTimestampz,
  registerZonedDateTimeJSONFix,
  type TemporalTimestampzType,
} from '../columns/timestampz.ts'

export const timestampz: TemporalTimestampzType = createTimestampz()

export function _registerZonedDateTimeJSONFix() {
  return registerZonedDateTimeJSONFix()
}
