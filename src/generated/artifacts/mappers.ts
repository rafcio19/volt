/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
// tslint:disable:object-literal-sort-keys

import * as coreHttp from "@azure/core-http";

export const Attributes: coreHttp.CompositeMapper = {
  serializedName: "Attributes",
  type: {
    name: "Composite",
    className: "Attributes",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      notBefore: {
        serializedName: "nbf",
        type: {
          name: "UnixTime"
        }
      },
      expires: {
        serializedName: "exp",
        type: {
          name: "UnixTime"
        }
      },
      created: {
        readOnly: true,
        serializedName: "created",
        type: {
          name: "UnixTime"
        }
      },
      updated: {
        readOnly: true,
        serializedName: "updated",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const SecretAttributes: coreHttp.CompositeMapper = {
  serializedName: "SecretAttributes",
  type: {
    name: "Composite",
    className: "SecretAttributes",
    modelProperties: {
      ...Attributes.type.modelProperties,
      recoverableDays: {
        readOnly: true,
        serializedName: "recoverableDays",
        type: {
          name: "Number"
        }
      },
      recoveryLevel: {
        nullable: false,
        readOnly: true,
        serializedName: "recoveryLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretBundle: coreHttp.CompositeMapper = {
  serializedName: "SecretBundle",
  type: {
    name: "Composite",
    className: "SecretBundle",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      kid: {
        readOnly: true,
        serializedName: "kid",
        type: {
          name: "String"
        }
      },
      managed: {
        readOnly: true,
        serializedName: "managed",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SecretItem: coreHttp.CompositeMapper = {
  serializedName: "SecretItem",
  type: {
    name: "Composite",
    className: "SecretItem",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      managed: {
        readOnly: true,
        serializedName: "managed",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DeletedSecretBundle: coreHttp.CompositeMapper = {
  serializedName: "DeletedSecretBundle",
  type: {
    name: "Composite",
    className: "DeletedSecretBundle",
    modelProperties: {
      ...SecretBundle.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        readOnly: true,
        serializedName: "scheduledPurgeDate",
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        readOnly: true,
        serializedName: "deletedDate",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const DeletedSecretItem: coreHttp.CompositeMapper = {
  serializedName: "DeletedSecretItem",
  type: {
    name: "Composite",
    className: "DeletedSecretItem",
    modelProperties: {
      ...SecretItem.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        readOnly: true,
        serializedName: "scheduledPurgeDate",
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        readOnly: true,
        serializedName: "deletedDate",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const SecretRestoreParameters: coreHttp.CompositeMapper = {
  serializedName: "SecretRestoreParameters",
  type: {
    name: "Composite",
    className: "SecretRestoreParameters",
    modelProperties: {
      secretBundleBackup: {
        required: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const SecretProperties: coreHttp.CompositeMapper = {
  serializedName: "SecretProperties",
  type: {
    name: "Composite",
    className: "SecretProperties",
    modelProperties: {
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretSetParameters: coreHttp.CompositeMapper = {
  serializedName: "SecretSetParameters",
  type: {
    name: "Composite",
    className: "SecretSetParameters",
    modelProperties: {
      value: {
        required: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      secretAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      }
    }
  }
};

export const SecretUpdateParameters: coreHttp.CompositeMapper = {
  serializedName: "SecretUpdateParameters",
  type: {
    name: "Composite",
    className: "SecretUpdateParameters",
    modelProperties: {
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      secretAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SecretListResult: coreHttp.CompositeMapper = {
  serializedName: "SecretListResult",
  type: {
    name: "Composite",
    className: "SecretListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SecretItem"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeletedSecretListResult: coreHttp.CompositeMapper = {
  serializedName: "DeletedSecretListResult",
  type: {
    name: "Composite",
    className: "DeletedSecretListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeletedSecretItem"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BackupSecretResult: coreHttp.CompositeMapper = {
  serializedName: "BackupSecretResult",
  type: {
    name: "Composite",
    className: "BackupSecretResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      innerError: {
        readOnly: true,
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const KeyVaultError: coreHttp.CompositeMapper = {
  serializedName: "KeyVaultError",
  type: {
    name: "Composite",
    className: "KeyVaultError",
    modelProperties: {
      error: {
        readOnly: true,
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};
