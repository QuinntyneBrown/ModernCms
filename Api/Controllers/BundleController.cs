﻿using Data.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api.Controllers
{
    public class BundleController : ApiController
    {
        public BundleController(ISubscribeToProviderUow uow)
        {
            this.uow = uow;
        }

        protected readonly ISubscribeToProviderUow uow;
    }
}
