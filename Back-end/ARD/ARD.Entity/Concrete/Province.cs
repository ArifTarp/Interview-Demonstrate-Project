﻿using ARD.Core.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace ARD.Entity.Concrete
{
    public class Province : IEntity
    {
        public Province()
        {
            Districts = new List<District>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<District> Districts { get; set; }
    }
}
