﻿using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dtos
{
    public class BundleDto
    {
        public BundleDto(Bundle bundle)
        {

        }

        public BundleDto()
        {

        }

        public string Name { get; set; }
        public int Id { get; set; }
    }
}
