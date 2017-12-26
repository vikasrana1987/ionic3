/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Topic" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Topics service manages creating instances of Topic, so go ahead and rename
 * that something that fits your app as well.
 */
export class Topic {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Topic {
  [prop: string]: any;
}
