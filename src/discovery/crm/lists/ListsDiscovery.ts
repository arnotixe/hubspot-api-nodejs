import { createConfiguration, Configuration } from '../../../../codegen/crm/lists/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  GDPRApi,
  RequestContext,
  ResponseContext,
  SearchApi,
} from '../../../../codegen/crm/lists/index'
import { Observable } from '../../../../codegen/crm/lists/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class ListsDiscovery {
  public basicApi: BasicApi
  // public associationsApi: AssociationsApi
  // public batchApi: BatchApi
  // public gdprApi: GDPRApi
  // public searchApi: SearchApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.basicApi = new BasicApi(configuration)
    // this.associationsApi = new AssociationsApi(configuration)
    // this.batchApi = new BatchApi(configuration)
    // this.gdprApi = new GDPRApi(configuration)
    // this.searchApi = new SearchApi(configuration)
  }

  public async getById(
    productId: string,
    properties?: string[],
    propertiesWithHistory?: Array<string>,
    associations?: Array<string>,
    archived?: boolean,
    idProperty?: string,
    _options?: Configuration,
  ): Promise<any> {
    return await this.basicApi.getById (
      productId,
      properties,
      propertiesWithHistory,
      associations,
      archived,
      idProperty,
      _options,
    )
  }
}
